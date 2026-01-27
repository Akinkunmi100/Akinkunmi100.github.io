# 📊 Marketing Campaign Prediction

**Customer Response Prediction using Machine Learning in R**

---

## 🎯 Project Overview

### Introduction
In order to maintain a competitive edge and sustain their progress, many companies employ marketing campaigns as a strategy to engage with their customers, thereby enhancing their sales landscape and customer retention.

> **Key Insight**: Customer acquisition costs are approximately **5-6 times higher** than retaining existing customers (Colgate & Danaher, 2000). This makes predicting customer response to campaigns critically important.

This project exemplifies the profound impact of machine learning, offering a comprehensive perspective on accurately predicting customer responses to promotional offers based on individual customer traits.

### Objectives
- Extract customer data from MySQL database
- Perform data preprocessing and cleaning
- Conduct exploratory data analysis (EDA)
- Engineer relevant features
- Build and compare multiple classification models
- Perform cluster analysis for customer segmentation
- Provide actionable recommendations

---

## 📊 Data Collection and Understanding

### Data Source
Dataset was retrieved from a **MySQL database** and underwent various stages of processing including:
- Preprocessing and cleansing
- Exploratory data analysis
- Feature manipulation
- Model development for predictive analytics

### Dataset Overview
| Metric | Value |
|--------|-------|
| **Total Records** | 22,141 |
| **Features** | 10 |
| **Missing Values** | 0 (Clean dataset) |
| **Target Variable** | Response (0/1) |

### Key Statistics
| Feature | Mean | Min | Max |
|---------|------|-----|-----|
| Birth Year | 1969 | 1893 | 1996 |
| Annual Income | $52,514 | $1,730 | $666,666 |
| Recency (days) | 49 | 0 | 99 |
| Web Purchases | 4.1 | 0 | 27 |
| Store Purchases | 5.8 | 0 | 13 |
| Web Visits/Month | 5.3 | 0 | 20 |
| Response Rate | 15.32% | — | — |

### Feature Descriptions
| Feature | Description |
|---------|-------------|
| **ID** | Unique customer identifier |
| **Year_Birth** | Customer's birth year |
| **Education** | Education level (Graduation, PhD, Master, etc.) |
| **MaritalStatus** | Marital status (Single, Married, Together, etc.) |
| **Income** | Annual household income |
| **Recency** | Days since last purchase |
| **NumWebPurchases** | Number of purchases made online |
| **NumStorePurchases** | Number of purchases made in-store |
| **NumWebVisitsMonth** | Number of website visits last month |
| **Response** | Target: Accepted campaign offer (1) or not (0) |

---

## 🔍 Exploratory Data Analysis

### Customer Demographics
- **Majority of participants** are individuals of older age (average birth year: 1969)
- **Income distribution**: Wide range from $1,730 to $666,666
- Mean duration since last purchase: ~49 days
- Average of 5 web visits recorded per month
- Average 4 online purchases vs 6 in-store purchases

### Education Level Analysis
| Education | Declined | Accepted |
|-----------|----------|----------|
| Graduation | 9,558 | 1,592 |
| PhD | 3,751 | — |
| Master | 3,145 | — |

**Key Finding**: Higher rate of campaign offer decline was observed among graduate customers compared to those at other educational levels.

### Response Rate
- **15.32%** of customers accepted the campaign offer
- **84.68%** declined
- Indicates **class imbalance** in target variable

---

## ⚙️ Data Preprocessing

### MySQL Database Connection
```r
database_con <- dbConnect(MySQL(), 
    user = DBUser, 
    password = UserPassword,
    host = HostName, 
    dbname = DatabaseName, 
    port = 3306)

data <- dbGetQuery(database_con, 
    statement = "SELECT * FROM world.marketingcampaign")
```

### Data Quality
- ✅ No missing observations
- ✅ Clean dataset ready for analysis
- ✅ All 22,141 records complete

---

## 🤖 Model Building

### Models Evaluated

#### 1. Decision Tree
- Built using `rpart` package
- Visualized with `rpart.plot`
- Confusion matrix evaluation
- ROC and AUC analysis

#### 2. Logistic Regression
- Binary classification model
- Probability-based predictions
- ROC and AUC curves generated

#### 3. K-Nearest Neighbor (KNN)
- Instance-based learning
- Model preparation and fitting
- Distance-based classification
- Performance evaluation with confusion matrix

#### 4. Cluster Analysis
- Customer segmentation using `cluster` package
- Pattern discovery in customer behavior
- Visualization with `factoextra`

### Model Comparison
All models were evaluated using:
- Confusion Matrix
- ROC (Receiver Operating Characteristic) Curve
- AUC (Area Under Curve) Score

---

## 🛠️ Technical Stack

### R Libraries Used
| Category | Libraries |
|----------|-----------|
| **Decision Tree** | rpart, rpart.plot |
| **Database** | DBI, RMySQL |
| **Machine Learning** | caret, class |
| **Evaluation** | pROC |
| **Visualization** | ggplot2, gridExtra |
| **Data Manipulation** | dplyr, readr |
| **Clustering** | cluster, factoextra |
| **Correlation** | corrplot |

### Database
- **MySQL** database for data storage
- SQL queries for data extraction
- Secure connection handling

---

## 📈 Key Findings from Cluster Analysis

Customer segmentation revealed distinct groups based on:
- Purchasing behavior (web vs store)
- Income levels
- Engagement patterns (recency, web visits)
- Response likelihood

---

## 💡 Conclusions

1. **Customer Retention Focus**: Acquiring new customers costs 5-6x more than retention
2. **Education Impact**: Graduate customers showed higher campaign decline rates
3. **Multi-Channel Behavior**: Customers show different patterns for online vs in-store purchases
4. **Predictive Power**: Machine learning models can effectively predict campaign response
5. **Segmentation Value**: Cluster analysis reveals actionable customer segments

---

## 📋 Recommendations

1. **Targeted Campaigns**: Focus on customer segments with higher response likelihood
2. **Retention Strategy**: Invest in retaining existing customers over acquisition
3. **Channel Optimization**: Tailor campaigns based on customer purchase channel preferences
4. **Education-Based Targeting**: Develop specific strategies for different education levels
5. **Recency Consideration**: Target customers based on time since last purchase

---

## 📚 References

- Ascarza et al. (2018) — Customer retention and firm interactions
- Colgate & Danaher (2000) — Customer acquisition vs retention costs

---

## 📁 Project Files

```
├── Marketing Campaign Prediction.Rmd   # Main R Markdown notebook
├── Marketing campaign viz.pbix         # Power BI visualization
└── README.md                           # This documentation
```

---

## 👤 Author

**Akinkunmi Akinlabi**  
Data Scientist | R Developer

---

*Built with R, MySQL, and ❤️*
