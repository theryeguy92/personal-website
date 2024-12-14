#!/bin/bash

# Navigate to the project directory
cd /home/ryan/personal_website

# Load environment variables from the .env file
export $(grep -v '^#' /home/ryan/secure-directory/db-credentials/personal-website/.env | xargs)

# Timestamp for backup file naming
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_DIR="./mysql_backups"
BACKUP_FILE="$BACKUP_DIR/website_analytics_$TIMESTAMP.sql"

# Ensure the backup directory exists
mkdir -p $BACKUP_DIR

# Debug: Print the backup directory
echo "Backup directory: $BACKUP_DIR"

# Run mysqldump using the dynamically loaded root password
docker exec mysql-container mysqldump -u root -p"$MYSQL_ROOT_PASSWORD" website_analytics > $BACKUP_FILE 2> error.log

# Debug: Check if the backup file was created
if [ -f "$BACKUP_FILE" ]; then
    echo "Backup completed: $BACKUP_FILE"
else
    echo "Backup failed. Check error.log for details."
fi

# Keep only the latest 7 backups
find $BACKUP_DIR -type f -mtime +7 -name "*.sql" -exec rm {} \;
