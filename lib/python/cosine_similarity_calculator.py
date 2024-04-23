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
