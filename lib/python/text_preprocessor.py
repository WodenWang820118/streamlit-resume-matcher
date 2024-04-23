from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer, WordNetLemmatizer


class TextPreprocessor:
    def __init__(self, stemming=False, lemmatization=True):
        self.stemming = stemming
        self.lemmatization = lemmatization
        self.stop_words = set(stopwords.words('english'))
        self.stemmer = PorterStemmer()
        self.lemmatizer = WordNetLemmatizer()

    def preprocess(self, text):
        # Tokenize the text
        tokens = word_tokenize(text)

        # Convert to lowercase
        tokens = [token.lower() for token in tokens]

        # Remove stopwords
        tokens = [token for token in tokens if token not in self.stop_words]

        # Remove numbers
        tokens = [token for token in tokens if not token.isdigit()]

        # Perform stemming or lemmatization
        if self.stemming:
            tokens = [self.stemmer.stem(token) for token in tokens]
        elif self.lemmatization:
            tokens = [self.lemmatizer.lemmatize(token) for token in tokens]

        # Join the tokens back into a string
        preprocessed_text = ' '.join(tokens)

        return preprocessed_text

