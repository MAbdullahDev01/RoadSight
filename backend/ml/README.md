# RoadSight ML Module

## Folder Structure

* `data/` → raw and processed images
* `notebooks/` → EDA and training notebooks
* `training/` → dataset and preprocessing scripts
* `evaluation/` → evaluation metrics script
* `inference/` → prediction script
* `models/` → saved model checkpoints

## Usage

### 1️⃣ Evaluate model

```bash
python evaluation/evaluate.py
```

### 2️⃣ Predict new images

```bash
python inference/predict.py "<path_to_image_or_folder>"
```

### 3️⃣ Training (optional)

* Use `notebooks/train_finetune.ipynb` to fine-tune or retrain the model

## Notes

* Ensure `data/raw/` is in `.gitignore` to avoid committing large image files
* The model is saved as `roadsight_v2.pt` in the `models/` folder
* Use the provided transforms in `training/transforms.py` for preprocessing