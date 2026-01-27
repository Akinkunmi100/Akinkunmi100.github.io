# ❤️ Heart Disease Prediction

**Data Science Nigeria (DSN) Bootcamp 2024 Classification Challenge**

---

## 🎯 Business Problem

Predict the presence of heart disease in patients using clinical features. This binary classification task aims to support early detection and intervention for cardiovascular health.

**Dataset**: 10,000 patient records with 14 clinical features  
**Target**: Binary classification (1 = Heart Disease, 0 = No Heart Disease)

---

## 📊 Dataset Features

| Feature | Description |
|---------|-------------|
| **Age** | Patient age in years |
| **Sex** | Gender (1 = Male, 0 = Female) |
| **cp** | Chest pain type (0-3) |
| **trestbps** | Resting blood pressure (mm Hg) |
| **chol** | Serum cholesterol (mg/dl) |
| **fbs** | Fasting blood sugar > 120 mg/dl |
| **restecg** | Resting ECG results |
| **thalach** | Maximum heart rate achieved |
| **exang** | Exercise induced angina |
| **oldpeak** | ST depression induced by exercise |
| **slope** | Slope of peak exercise ST segment |
| **ca** | Number of major vessels (0-4) |
| **thal** | Thalassemia type |
| **target** | Heart disease presence (1/0) |

---

## 🛠️ Technical Stack

```python
# Core Libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Machine Learning
from sklearn.model_selection import train_test_split, cross_val_score, KFold
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier, StackingClassifier
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
import xgboost as xgb
import lightgbm as lgb
```

---

## 🔄 Methodology

### 1. Data Preprocessing
- Combined train/test datasets (7,303 + 2,697 records)
- Handled missing values in target column
- Exploratory data analysis with distribution plots

### 2. Feature Engineering
- Analyzed correlation matrices
- Applied StandardScaler normalization
- Univariate and bivariate analysis

### 3. Model Development

| Model | Accuracy | Notes |
|-------|----------|-------|
| **Random Forest** | **80.9%** | Best performer after tuning |
| XGBoost | ~80% | Gradient boosting |
| LightGBM | ~79% | Fast gradient boosting |
| AdaBoost | ~78% | Adaptive boosting |

### 4. Hyperparameter Tuning

```python
param_dist = {
    'n_estimators': [100, 200, 300],
    'max_depth': [None, 5, 10],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

random_search = RandomizedSearchCV(
    estimator=RandomForestClassifier(),
    param_distributions=param_dist,
    n_iter=10, cv=5, scoring='accuracy'
)
```

### 5. Ensemble Stacking

```python
stacking_model = StackingClassifier(
    estimators=[
        ("rf", RandomForestClassifier(n_estimators=100)),
        ("ada", AdaBoostClassifier()),
        ("xgb", xgb.XGBClassifier(max_depth=4, n_estimators=100))
    ],
    final_estimator=RandomForestClassifier(random_state=42),
    cv=5,
    n_jobs=-1
)
```

---

## 📈 Results

- **Mean Accuracy**: 80.9% (10-fold CV)
- **Best Fold**: 82.63%
- **Cross-Validation**: Consistent performance across all folds

### Fold-by-Fold Results
```
Fold 1: 80.57%    Fold 6: 80.41%
Fold 2: 82.63%    Fold 7: 81.92%
Fold 3: 79.89%    Fold 8: 78.77%
Fold 4: 80.82%    Fold 9: 81.51%
Fold 5: 81.23%    Fold 10: 81.23%
```

---

## 📁 Project Structure

```
├── DSN heart_Disease Prediction Bootcamp 2024.ipynb  # Main notebook
├── Heart Disease Prediction.pdf                       # Full report
└── README.md                                          # This file
```

---

## 🎓 Key Learnings

1. **Random Forest** outperformed other algorithms after hyperparameter tuning
2. **Ensemble methods** (stacking) can combine strengths of multiple models
3. **Cross-validation** is essential for reliable performance estimation
4. **Feature analysis** reveals clinical indicators most predictive of heart disease

---

## 🏆 Competition Context

This project was developed as part of the **Data Science Nigeria (DSN) Bootcamp 2024** classification challenge, demonstrating practical application of machine learning to healthcare analytics.

---

## 👤 Author

**Akinkunmi Akinlabi**  
Data Scientist | Machine Learning Engineer

---

*Built with Python, Scikit-learn, XGBoost, and ❤️*
