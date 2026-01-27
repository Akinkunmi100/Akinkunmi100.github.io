# ❤️ Heart Disease Prediction

**Data Science Nigeria X Microsoft 2024 AI Bootcamp Qualification Hackathon**

---

## 🎯 Project Overview

### Background
Heart disease is a leading cause of death worldwide. Early detection and prediction of heart disease are crucial for timely intervention and improved patient outcomes. Machine learning techniques have shown promising results in predicting heart disease risk based on individual patient characteristics.

### Problem Statement
This project addresses the problem of predicting heart disease using a machine learning model trained on a dataset of patient information. The goal is to develop a model that accurately classifies individuals as having or not having heart disease.

### Objectives
- Explore and analyze a heart disease dataset
- Preprocess the data, handle missing values, and engineer relevant features
- Develop a machine learning model for heart disease prediction
- Evaluate the performance of the model and compare different algorithms

---

## 📊 Data Collection and Understanding

### Data Source
The dataset was sourced from **Data Science Nigeria X Microsoft 2024 AI Bootcamp Qualification Hackathon on Zindi**.

### Dataset Overview
| Metric | Value |
|--------|-------|
| Total Records | 10,000 |
| Training Samples | 7,303 |
| Test Samples | 2,697 |
| Features | 14 |
| Target | Binary (Heart Disease: Yes/No) |

### Feature Descriptions

| Feature | Description |
|---------|-------------|
| **Age** | Age of the patient |
| **Sex** | Gender (0 = Female, 1 = Male) |
| **cp** | Chest pain type (0 = Typical Angina, 1 = Atypical Angina, 2 = Non-Anginal Pain, 3 = Asymptomatic) |
| **trestbps** | Resting blood pressure (mm Hg on admission) |
| **chol** | Serum cholesterol in mg/dl |
| **fbs** | Fasting blood sugar > 120 mg/dl (0 = No, 1 = Yes) |
| **restecg** | Resting ECG results (0 = Normal, 1 = ST-T Abnormality, 2 = LV Hypertrophy) |
| **thalach** | Maximum heart rate achieved |
| **exang** | Exercise-induced angina (0 = No, 1 = Yes) |
| **oldpeak** | ST depression induced by exercise relative to rest |
| **slope** | Slope of peak exercise ST segment (0 = Upsloping, 1 = Flat, 2 = Downsloping) |
| **ca** | Number of major vessels (0-3) colored by fluoroscopy |
| **thal** | Thalassemia (0 = Normal, 1 = Fixed defect, 2 = Reversable defect) |
| **target** | Heart disease (0 = No, 1 = Yes) |

---

## 🔍 Exploratory Data Analysis

### Univariate Analysis Findings
- **Age distribution**: Slightly right-skewed, most patients were middle-aged
- **Blood pressure**: Relatively normal distribution with few outliers on higher end
- **Cholesterol levels**: Fairly normal with outliers on both extremes
- **Maximum heart rate**: Slightly left-skewed with outliers at lower end
- **Gender**: More male patients than female
- **Chest pain**: Most patients experienced atypical angina or non-anginal pain
- **Fasting blood sugar**: Majority had levels below 120 mg/dl
- **ECG results**: Mostly normal across patient population
- **Exercise-induced angina**: Relatively rare
- **ST segment**: Majority had flat or upsloping
- **Major vessels**: Significant number had no vessels colored by fluoroscopy
- **Target variable**: **Class imbalance** — more patients without heart disease

### Bivariate Analysis Findings
- **Age**: Associated with slightly higher risk of heart disease (older patients more susceptible)
- **Cholesterol**: Did not display clear trend with heart disease
- **Chest pain type**: Significant indicator — asymptomatic chest pain = higher likelihood
- **Exercise-induced angina**: Those who suffered were more at risk
- **Multivariate insight**: Chest pain type + maximum heart rate jointly influence risk

### Key Risk Factors Identified
1. **Age** (older patients)
2. **Chest pain type** (asymptomatic)
3. **Exercise-induced angina**

---

## ⚙️ Feature Engineering

### 1. Categorical Encoding
Categorical features (sex, chest pain type, ST slope) transformed using **Label Encoding** for algorithm compatibility.

### 2. Age Binning
Ages grouped into categories for capturing non-linear relationships:
- Young
- Adult
- Middle Age
- Old

### 3. Handling Class Imbalance
**SMOTE (Synthetic Minority Over-sampling Technique)** used to oversample the minority class (patients with heart disease), enabling better identification of heart disease cases.

### 4. Feature Scaling
**StandardScaler** applied for normalization across all numerical features.

---

## 🤖 Model Building

### Models Evaluated
| Model | Description |
|-------|-------------|
| **Random Forest** | Ensemble of decision trees with bootstrapping |
| **XGBoost** | Gradient boosting with regularization |
| **LightGBM** | Gradient boosting optimized for efficiency and scalability |
| **Stacking Ensemble** | Combined predictions of LightGBM + XGBoost |

### Hyperparameter Tuning
**RandomizedSearchCV** employed for efficient hyperparameter exploration:
- Samples different combinations of values
- Evaluates performance through cross-validation
- Parameters tuned: n_estimators, max_depth, min_samples_split, min_samples_leaf

### Model Comparison Results
| Model | Accuracy | Notes |
|-------|----------|-------|
| Random Forest | ~80.9% | 10-fold CV |
| XGBoost | ~80% | Gradient boosting |
| LightGBM | **Highest** | Best computational efficiency |
| Stacking | Competitive | Combined approach |

### Best Model: LightGBM
LightGBM was selected as the final model due to:
- **Highest accuracy** on the dataset
- **Computational efficiency** and scalability
- **Effective handling** of large datasets

---

## 📈 Key Results

| Metric | Value |
|--------|-------|
| **Best Model Accuracy** | ~80.9% |
| **Cross-Validation** | 10-Fold |
| **Records Analyzed** | 10,000 |
| **Algorithms Compared** | 4 |
| **Key Predictors** | Age, Chest Pain Type, Exercise Angina |

---

## 💡 Conclusions

The analysis highlighted several key factors associated with heart disease risk:

1. **Age, chest pain type, and exercise-induced angina** emerged as significant predictors
2. **Older patients** and those experiencing **asymptomatic chest pain** or **angina during exercise** are more likely to have heart disease
3. **Cholesterol levels** did not show a clear relationship with heart disease
4. **Maximum heart rate** appeared to influence the condition when combined with chest pain type
5. **Class imbalance** was successfully addressed using SMOTE technique

---

## 📋 Recommendations

1. **Focus on Key Predictors**: Emphasizing age, chest pain type, and exercise-induced angina will result in more accurate and targeted interventions
2. **Investigate Variable Interactions**: Further research into interactions between maximum heart rate and chest pain type could uncover additional insights
3. **Clinical Application**: Model can assist in early screening and risk assessment

---

## 🛠️ Technical Stack

| Category | Tools |
|----------|-------|
| **Language** | Python |
| **ML Libraries** | Scikit-learn, XGBoost, LightGBM |
| **Data Processing** | Pandas, NumPy |
| **Visualization** | Matplotlib, Seaborn |
| **Resampling** | imbalanced-learn (SMOTE) |
| **Validation** | K-Fold Cross-Validation |

---

## 📁 Project Files

```
├── DSN heart_Disease Prediction Bootcamp 2024.ipynb  # Main notebook
├── Heart Disease Prediction.pdf                       # Full report
└── README.md                                          # This documentation
```

---

## 👤 Author

**Akinkunmi Akinlabi**  
Data Scientist | Machine Learning Engineer

---

*DSN X Microsoft 2024 AI Bootcamp Qualification Hackathon* 🏆
