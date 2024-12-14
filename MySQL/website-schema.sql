-- Create the database
CREATE DATABASE IF NOT EXISTS website_analytics;

-- Use the db
USE website_analytics;

-- Create Table for User Access to Personal Website
CREATE TABLE user_access(
    id INT AUTO_INCREMENT PRIMARY KEY, -- Generic ID for any user
    entity_name VARCHAR(255), -- Could represent a company, organization, or individual
    access_key VARCHAR(255) UNIQUE, -- Unique key for user access
    login_count INT DEFAULT 0, -- Track login attempts
    last_login DATETIME -- Track the last login time
);

-- Interaction Logs Table
CREATE TABLE interaction_logs(
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each interaction
    user_id INT, -- References user_access.id
    action_type ENUM('page_view', 'click', 'share'), -- Type of interaction
    action_details JSON, -- Detailed information about the interaction
    ip_address VARCHAR(45), -- Track IP for analytics/sharing
    user_agent TEXT, -- Device/browser detailsy, organization, or individual
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, -- Interaction time
    FOREIGN KEY (user_id) REFERENCES user_access(id) ON DELETE CASCADE -- data integrity
);

-- Feature Use Log Table
CREATE TABLE feature_usage(
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each feature usage log
    user_id INT, -- References user_access.id
    feature_name ENUM('Proj Page', 'Emulator', 'Dashboard'), -- Feature used
    action_type ENUM('view', 'click'), -- action performed
    action_details JSON, -- Additional details in JSON
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, -- Time of action
    FOREIGN KEY (user_id) REFERENCES user_access(id) ON DELETE CASCADE -- data integrity
);

-- Projects Table
CREATE TABLE projects(
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each project
    name VARCHAR(255) NOT NULL, -- Name of Project
    description TEXT, -- Description of project
    link VARCHAR(255), -- Link to project
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP -- Creation Timestamp
);

-- Performance Indexes
CREATE INDEX idx_user_id_interactions ON interaction_logs(user_id);
CREATE INDEX idx_timestamp_interactions ON interaction_logs(timestamp);
CREATE INDEX idx_user_id_features ON feature_usage(user_id);
CREATE INDEX idx_timestamp_features ON feature_usage(timestamp);