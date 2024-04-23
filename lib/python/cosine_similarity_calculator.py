from text_preprocessor import TextPreprocessor
from tfidf_calculator import TfidfCalculator
from sklearn.metrics.pairwise import cosine_similarity

class CosineSimilarityCalculator:
    def __init__(self, tfidf_matrix):
        self.tfidf_matrix = tfidf_matrix

    def calculate_similarity(self, doc_index1, doc_index2):
        # Get the TF-IDF vectors for the specified documents
        tfidf_vector1 = self.tfidf_matrix[doc_index1]
        tfidf_vector2 = self.tfidf_matrix[doc_index2]

        # Calculate the cosine similarity between the vectors
        similarity_score = cosine_similarity(tfidf_vector1, tfidf_vector2)[0][0]

        return similarity_score

# Example usage
preprocessor = TextPreprocessor(lemmatization=True)

resume_text = "Machine learning is a fascinating field of artificial intelligence. It involves the development of algorithms and models that enable computers to learn and make predictions or decisions without being explicitly programmed. Machine learning has numerous applications, such as image recognition, natural language processing, and recommendation systems. Python is a popular programming language for machine learning due to its extensive libraries and frameworks, such as scikit-learn and TensorFlow. With the increasing availability of data and computational power, machine learning continues to advance and transform various industries."

linkedin_text = "Machine learning, a subfield of artificial intelligence, is transforming the way computers learn and make decisions. It focuses on creating algorithms and models that allow systems to automatically improve their performance through experience. Python has emerged as a leading language for machine learning, thanks to its rich ecosystem of libraries like scikit-learn and TensorFlow. Machine learning finds applications in diverse domains, including computer vision, natural language understanding, and personalized recommendations. As data becomes more abundant and computing power increases, machine learning is poised to revolutionize numerous industries and shape the future of technology."

preprocessed_resume = preprocessor.preprocess(resume_text)
preprocessed_linkedin = preprocessor.preprocess(linkedin_text)

documents = [preprocessed_resume, preprocessed_linkedin]

tfidf_calculator = TfidfCalculator()
tfidf_matrix, feature_names = tfidf_calculator.calculate_tfidf(documents)

similarity_calculator = CosineSimilarityCalculator(tfidf_matrix)
similarity_score = similarity_calculator.calculate_similarity(0, 1)

print("Preprocessed Resume:", preprocessed_resume)
print("Preprocessed LinkedIn:", preprocessed_linkedin)
print("Cosine Similarity:", similarity_score)
