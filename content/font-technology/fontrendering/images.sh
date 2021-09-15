

rm ./img/*.png

for file in ./img/upscale100x/*.png; 
do
	BASE=$(basename "$file" .png)
	convert $file -interpolate Nearest -filter point -resize 10000% ./img/$BASE@100x.png
done

for file in ./img/upscale10x/*.png; 
do
	BASE=$(basename "$file" .png)
	convert $file -interpolate Nearest -filter point -resize 1000% ./img/$BASE@10x.png
done

