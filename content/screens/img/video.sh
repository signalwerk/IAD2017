IN=REC016.AVI
OUT=$(echo $IN | sed 's/^\(.*\)\.[a-zA-Z0-9]*$/\1/')

# mp4
ffmpeg -i $IN -acodec aac -vcodec libx264 -f mp4 -s 640x360 $OUT.mp4

# webm
ffmpeg -i $IN -f webm -vcodec libvpx -acodec libvorbis -s 640x360 $OUT.webm
