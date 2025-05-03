for file in *.png; do
  magick "$file" -quality 75 -resize 60% -format webp "${file%.png}.webp"
done