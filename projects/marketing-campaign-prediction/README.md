# Marketing Campaign Response Prediction

## 📌 Project Overview

This project develops a predictive analytics system to identify customers most likely to respond positively to marketing campaigns. By leveraging multiple machine learning techniques, we enable data-driven targeting strategies that optimize marketing ROI and reduce wasted spend on unresponsive customers.

---

## 🎯 Business Problem

As a data scientist at **BangorTelco**, I was tasked with answering: *"Is there a way to determine in advance which customers are likely to accept the offer in the marketing campaign?"*

Key challenges included:

- **High marketing costs** with low return on investment
- **No systematic way** to identify responsive customers
- **Limited understanding** of customer segments and behaviors
- **Inability to prioritize** marketing efforts effectively

**Goal:** Build a predictive model using 20,000+ customer records from the company database that the sales team can use to target customers likely to accept offers, reducing marketing costs significantly.

---

## 📊 Dataset

The dataset was extracted from a MySQL database and contains customer demographic, behavioral, and transactional information:

| Feature | Description |
|---------|-------------|
| `Year_Birth` | Customer's year of birth |
| `Education` | Education level (Basic, Graduation, Master, PhD, 2n Cycle) |
| `MaritalStatus` | Marital status (Single, Married, Divorced, etc.) |
| `Income` | Annual household income |
| `NumWebVisitsMonth` | Number of website visits per month |
| `NumWebPurchases` | Number of purchases made through website |
| `NumStorePurchases` | Number of purchases made in-store |
| `Response` | Target variable (1 = Responded, 0 = Did not respond) |

---

## 🔧 Methodology

### 1. Data Preprocessing
- Extracted data from MySQL using `RMySQL`
- Handled outliers using IQR method (replaced with median)
- Removed unrealistic birth years (< 1900)
- Encoded categorical variables (Education, Marital Status)
- Removed irrelevant columns (ID)

### 2. Exploratory Data Analysis
- Visualized response distribution across demographics
- Created correlation matrix for numerical features
- Analyzed income distribution and outliers
- Cross-tabulated education and marital status with response

### 3. Feature Engineering
- Label encoding for Education (1-5 scale)
- Label encoding for Marital Status (1-8 scale)
- Binary response conversion (Yes/No)

### 4. Model Building

#### Decision Tree (rpart)
```r
class_mod1 = rpart(Response ~ ., data = train_data)
```
- Provides interpretable business rules
- Easy to explain to stakeholders

#### Logistic Regression
```r
log_model <- glm(Response ~ ., data = train_data, family = binomial)
```
- Statistical significance of predictors
- Odds ratio interpretation

#### K-Nearest Neighbors
```r
knn_model <- train(Response ~ ., data = train_data, method = 'knn')
```
- Non-parametric approach
- Captures complex patterns

### 5. Customer Segmentation

Applied clustering to identify distinct customer groups:

#### K-Means Clustering
```r
Kmeandata <- kmeans(x = scaled_features, center = 3, nstart = 5)
```

#### Hierarchical Clustering
- Created dendrograms for visual cluster analysis
- Used complete linkage method

---

## 📈 Results

### Classification Performance

| Model | Accuracy | ROC-AUC |
|-------|----------|---------|
| Decision Tree | ~85% | 0.72 |
| Logistic Regression | ~87% | 0.76 |
| K-Nearest Neighbors | ~86% | 0.74 |

### Customer Segments

Three distinct customer segments were identified based on:
- Income levels
- Web engagement (visits per month)
- Purchase behavior (online vs. in-store)

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Language** | R |
| **Data Wrangling** | dplyr, tidyverse |
| **Visualization** | ggplot2, corrplot |
| **Machine Learning** | caret, rpart, class |
| **Evaluation** | pROC (ROC-AUC) |
| **Clustering** | cluster, factoextra, dendextend |
| **Database** | MySQL (RMySQL, DBI) |
| **Reporting** | R Markdown, Power BI |

---

## 📁 Project Structure

```
├── Marketing Campaign Prediction.Rmd    # Main R Markdown analysis
├── Marketing Campaigne Pred Report.pdf  # Full report
├── Marketing campaign viz.pbix          # Power BI dashboard
├── Data Science Projct - Assignment Brief .pdf  # Problem statement
└── README.md                             # This file
```

---

## 🚀 How to Run

### Prerequisites
- R (>= 4.0)
- RStudio (recommended)
- MySQL database with the marketing campaign data

### Installation

1. Install required R packages:
```r
install.packages(c("ggplot2", "dplyr", "tidyverse", "tree", "rpart", 
                   "caret", "class", "dendextend", "corrplot", "pROC", 
                   "cluster", "factoextra", "DBI", "RMySQL"))
```

2. Configure database connection in the script:
```r
USER <- 'your_username'
PASSWORD <- 'your_password'
HOST <- 'localhost'
DBNAME <- 'your_database'
```

3. Open `Marketing Campaign Prediction.Rmd` in RStudio and click **Knit**

---

## 📊 Power BI Dashboard (Deployed)

The project includes a **deployed Power BI dashboard** (`Marketing campaign viz.pbix`) that provides:
- **Campaign Response Overview** — Real-time response rate tracking
- **Customer Segment Analysis** — Visual breakdown of the 3 identified clusters
- **Demographic Breakdowns** — Income, education, and marital status distributions
- **Key Performance Indicators** — Model accuracy, ROC-AUC, and targeting efficiency metrics
- **Interactive Filters** — Drill-down by segment, demographics, and response status

---

## 🎓 Key Learnings

1. **Logistic Regression** provided the best balance of accuracy and interpretability
2. **Customer segmentation** revealed actionable insights for targeted marketing
3. **Feature engineering** (especially income outlier handling) significantly improved model performance
4. **Cross-validation** ensured robust model evaluation

---

## 👤 Author

**Akinkunmi Akinlabi**  
Data Analyst & AI Engineer  
[Portfolio](https://akinkunmi100.github.io) | [LinkedIn](https://linkedin.com/in/akinkunmi-akinlabi)

---

## 📄 License

This project is for educational and portfolio demonstration purposes.
