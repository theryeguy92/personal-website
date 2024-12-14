# Define the output file
OUTPUT_FILE="project_structure_and_contents.txt"

# Start by printing the directory structure, completely ignoring node_modules
tree -L 3 -a -I 'node_modules' --prune > "$OUTPUT_FILE"

# Append the contents of files, excluding node_modules and specific files like package-lock.json
find . -type f \
    -not -path './frontend/node_modules/*' \
    -not -name 'package-lock.json' | while read -r file; do
    echo -e "\n==== Contents of: $file ====\n" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
done

# Inform the user of the output
echo "Project directory and file contents saved to $OUTPUT_FILE"
