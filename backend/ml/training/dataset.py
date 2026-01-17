import os
import xml.etree.ElementTree as ET
from PIL import Image  # Pillow library for image processing
import torch
from torch.utils.data import Dataset

class RoadSightDataset(Dataset):
    """
    PyTorch Dataset for RoadSight
    Returns: (image_tensor, label)
    """
    
    def __init__(self, image_dir, annotation_dir, transform=None):
        """
        image_dir: path to images
        annotation_dir: path to XML annotations
        transform: optional PyTorch transforms (resizing, normalization)
        """
        self.image_dir = image_dir
        self.annotation_dir = annotation_dir
        self.transform = transform
        
        # List all image files
        self.image_files = sorted(os.listdir(image_dir))
        
    def __len__(self):
        # Total number of examples
        return len(self.image_files)
    
    def __getitem__(self, idx):
        # Get filename
        img_name = self.image_files[idx]
        img_path = os.path.join(self.image_dir, img_name)
        
        # Load image using PIL
        image = Image.open(img_path).convert("RGB")  # ensure 3 channels
        
        # Apply transforms if provided
        if self.transform:
            image = self.transform(image)
        else:
            # Convert image to PyTorch tensor automatically
            image = torch.tensor(
                # Convert PIL Image to (H, W, C) array, then permute to (C, H, W)
                list(image.getdata()), dtype=torch.float32
            ).view(image.height, image.width, 3).permute(2, 0, 1) / 255.0  # scale 0-1
        
        # Get corresponding annotation
        label_file = img_name.replace(".jpg", ".xml")
        label_path = os.path.join(self.annotation_dir, label_file)
        
        label = 0  # default: no damage
        
        if os.path.exists(label_path):
            tree = ET.parse(label_path)
            root = tree.getroot()
            objects = root.findall(".//object")
            if len(objects) > 0:
                label = 1
        
        return image, label
