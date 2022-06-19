const { src, dest, watch, series , parallel } = require('gulp'); //llaves por q exporta mas de 1 funcion


//  Imagenes
// npm i gulp-imagemin@7.0.0  
//(tenemos q instalar esa version, la ultima no anda bien)
const imagemin = require('gulp-imagemin');
// npm i --save-dev gulp-webp
const webp = require('gulp-webp');
// npm i --save-dev gulp-avif
const avif = require('gulp-avif');



//    imagenes 
function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}') //solo para esos tipos de imagnes
        .pipe( webp( opciones ) )
        .pipe( dest('build/img'))
}
function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe ( avif( opciones ) )
        .pipe( dest('build/img'))
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( imagemin ({optimizationLevel: 3}))
        .pipe( dest('build/img'))    
}


exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.optimizaImagenes = series (imagenes, versionWebp, versionAvif,)

exports.default = this.optimizaImagenes;

