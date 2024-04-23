import streamlit as st
import pandas as pd
from root_component import root_component
from python.text_preprocessor import TextPreprocessor
from python.tfidf_calculator import TfidfCalculator
from python.cosine_similarity_calculator import CosineSimilarityCalculator

st.set_page_config(page_title="Angular in Streamlit", page_icon=":rocket:", layout="wide")

with st.container(border=False, height=600):
  # mount the component
  documents = root_component(data="Hello, World!", key="root_component")

  # Mock data when the component is not mounted
  resume_text = "This is a mock resume text. It contains relevant skills and experience."
  job_description = "This is a mock job description. It outlines the required qualifications."

  if isinstance(documents, dict) and "resume" in documents and "jobDescription" in documents:
    resume_text = documents["resume"]
    job_description = documents["jobDescription"]

  # preprocess the text
  preprocessor = TextPreprocessor(lemmatization=True)
  preprocessed_resume = preprocessor.preprocess(resume_text)
  preprocessed_job_description = preprocessor.preprocess(job_description)

  # calculate the tfidf matrix
  tfidf_calculator = TfidfCalculator()
  documents = [preprocessed_resume, preprocessed_job_description]
  tfidf_matrix, feature_names = tfidf_calculator.calculate_tfidf(documents)

  # calculate the similarity score
  similarity_calculator = CosineSimilarityCalculator(tfidf_matrix)
  similarity_score = similarity_calculator.calculate_similarity(0, 1)
st.write("Matching Score:", similarity_score)