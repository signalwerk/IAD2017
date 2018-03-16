montage ./img/original/ViewportSized* -background none -tile 3x1 -border 2 -bordercolor '#000000' -geometry +20+0 -crop -0+40 ./img/ViewportSizedAll.png
convert ./img/ViewportSizedAll.png -crop +20+0 ./img/ViewportSizedAll.png


montage ./img/original/FontToWidth* -background none -tile 2x1 -geometry +20+0 -crop -0+40 ./img/FontToWidthAll.png
convert ./img/FontToWidthAll.png -crop +20+0 ./img/FontToWidthAll.png


montage ./img/original/Interpolation* -background none -tile 2x1 -border 2 -bordercolor '#000000' -geometry +20+0 -crop -0+40 ./img/InterpolationAll.png
convert ./img/InterpolationAll.png -crop +20+0 ./img/InterpolationAll.png
