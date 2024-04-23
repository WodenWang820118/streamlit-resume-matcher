from text_preprocessor import TextPreprocessor
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

# Example usage
preprocessor = TextPreprocessor(lemmatization=True)

resume_text = "I am a data scientist with experience in machine learning."
linkedin_text = "We are seeking a data scientist with expertise in AI and ML."

preprocessed_resume = preprocessor.preprocess(resume_text)
preprocessed_linkedin = preprocessor.preprocess(linkedin_text)

documents = [preprocessed_resume, preprocessed_linkedin]

tfidf_calculator = TfidfCalculator()
tfidf_matrix, feature_names = tfidf_calculator.calculate_tfidf(documents)

print("TF-IDF Matrix:")
print(tfidf_matrix.toarray())
print("\nFeature Names:")
print(feature_names)
