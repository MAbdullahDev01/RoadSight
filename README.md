# RoadSight: Project Manifesto
**Role**: Lead Architect / Senior AI Engineer

**Timeline**: 30-Day MVP Execution

**Mission**: Transforming raw road imagery into actionable safety intelligence.

## 1. The Vision
Infrastructure maintenance is currently reactive and manual. Local governments and drivers lack real-time, low-cost tools to assess road health. RoadSight is designed to bridge the gap between high-level Computer Vision research and practical, end-user applications.

This project isn't just about training a model; it’s about building a resilient system that handles data flow, inference, and user feedback in a production-style environment.

## 2. Engineering Philosophies (The "Senior" Mindset)
To ensure this project carries the weight of professional engineering maturity, I will adhere to these four pillars:

- **System over SOTA**: I will prioritize a working, stable system over "State-Of-The-Art" accuracy. A 90% accurate model that is deployed beats a 99% accurate model that only runs in a Jupyter Notebook.

- **Separation of Concerns**: The Frontend, Backend, and ML layers must remain decoupled. This allows for modular testing and future scalability (e.g., swapping the CNN for a Transformer without breaking the UI).

- **Engineering Honesty**: I will document failures, trade-offs, and "Technical Debt." Admitting why I chose a simpler ResNet-18 over a complex model shows better judgment than pretending the simple choice was perfect.

- **The "Rule of 2 Seconds"**: User experience is king. From image upload to safety insight, the round-trip latency must be as low as possible for the MVP.

## 3. The Definition of Success (Day 30)
By the end of this log, RoadSight must achieve:

1. **Seamless Integration**: A user can upload a .jpg or .png and receive a classification in under 2 seconds.

2. **Actionable Output**: The system doesn't just say "Pothole"—it provides a safety context (e.g., "High Risk - Immediate Attention Required").

3. **Clean Repository**: A codebase that a stranger could clone, install dependencies for, and run within 10 minutes.

## 4. Initial Constraints & Bounds
- **Hardware**: Local CPU/GPU inference (Mac/PC) or Free-tier Cloud (Render/Railway).

- **Input**: Static images only (Video stream is a future-work item).

- **Scope**: Focused on 4 primary classes (Normal, Pothole, Crack, Damaged).

## 5. Signature of Intent
"I am building this to demonstrate that I can manage the full lifecycle of an AI product—from data exploration and model training to API orchestration and UI/UX design. Every commit will be intentional. Every bug will be a learning note."
