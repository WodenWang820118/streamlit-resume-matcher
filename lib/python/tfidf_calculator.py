from sklearn.feature_extraction.text import TfidfVectorizer

class TfidfCalculator:
    def __init__(self):
        self.vectorizer = TfidfVectorizer()

    def calculate_tfidf(self, documents):
        # Fit and transform the documents using TF-IDF vectorizer
        tfidf_matrix = self.vectorizer.fit_transform(documents)
        
        # Get the feature names (words)
        feature_names = self.vectorizer.get_feature_names_out()
        
        return tfidf_matrix, feature_names
