SELECT clothing.clothing_title AS clothing, clothingDescriptions.clothingDescription
FROM clothingDescriptions
LEFT JOIN clothing
ON clothingDescriptions.clothing_id = clothing.id     
ORDER BY clothing.clothing_title;