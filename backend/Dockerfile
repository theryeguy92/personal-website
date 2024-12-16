# Backend Dockerfile
FROM python:3.10-slim

# Install system dependencies (mysqlclient)
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    && apt-get clean

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code and environment files
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
