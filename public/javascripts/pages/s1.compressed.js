var _0x1808=["\x69\x6E\x69\x74\x5F\x67\x65\x6E\x72\x61\x6E\x64","\x69\x6E\x69\x74\x5F\x62\x79\x5F\x61\x72\x72\x61\x79","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x69\x6E\x74\x33\x32","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x69\x6E\x74\x33\x31","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x72\x65\x61\x6C\x31","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x72\x65\x61\x6C\x32","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x72\x65\x61\x6C\x33","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x72\x65\x73\x35\x33"];function MersenneTwister19937(){N=624;M=397;MATRIX_A=0x9908b0df;UPPER_MASK=0x80000000;LOWER_MASK=0x7fffffff;var _0xeb88x2= new Array(N);var _0xeb88x3=N+1;function _0xeb88x4(_0xeb88x5){return _0xeb88x5<0?(_0xeb88x5^UPPER_MASK)+UPPER_MASK:_0xeb88x5;} ;function _0xeb88x6(_0xeb88x5,_0xeb88x7){return _0xeb88x5<_0xeb88x7?_0xeb88x4((0x100000000-(_0xeb88x7-_0xeb88x5))&0xffffffff):_0xeb88x5-_0xeb88x7;} ;function _0xeb88x8(_0xeb88x5,_0xeb88x7){return _0xeb88x4((_0xeb88x5+_0xeb88x7)&0xffffffff);} ;function _0xeb88x9(_0xeb88x5,_0xeb88x7){var _0xeb88xa=0;for(var _0xeb88xb=0;_0xeb88xb<32;++_0xeb88xb){if((_0xeb88x5>>>_0xeb88xb)&0x1){_0xeb88xa=_0xeb88x8(_0xeb88xa,_0xeb88x4(_0xeb88x7<<_0xeb88xb));} ;} ;return _0xeb88xa;} ;this[_0x1808[0]]=function (_0xeb88xc){_0xeb88x2[0]=_0xeb88x4(_0xeb88xc&0xffffffff);for(_0xeb88x3=1;_0xeb88x3<N;_0xeb88x3++){_0xeb88x2[_0xeb88x3]=_0xeb88x8(_0xeb88x9(1812433253,_0xeb88x4(_0xeb88x2[_0xeb88x3-1]^(_0xeb88x2[_0xeb88x3-1]>>>30))),_0xeb88x3);_0xeb88x2[_0xeb88x3]=_0xeb88x4(_0xeb88x2[_0xeb88x3]&0xffffffff);} ;} ;this[_0x1808[1]]=function (_0xeb88xd,_0xeb88xe){var _0xeb88xb,_0xeb88xf,_0xeb88x10;this[_0x1808[0]](19650218);_0xeb88xb=1;_0xeb88xf=0;_0xeb88x10=(N>_0xeb88xe?N:_0xeb88xe);for(;_0xeb88x10;_0xeb88x10--){_0xeb88x2[_0xeb88xb]=_0xeb88x8(_0xeb88x8(_0xeb88x4(_0xeb88x2[_0xeb88xb]^_0xeb88x9(_0xeb88x4(_0xeb88x2[_0xeb88xb-1]^(_0xeb88x2[_0xeb88xb-1]>>>30)),1664525)),_0xeb88xd[_0xeb88xf]),_0xeb88xf);_0xeb88x2[_0xeb88xb]=_0xeb88x4(_0xeb88x2[_0xeb88xb]&0xffffffff);_0xeb88xb++;_0xeb88xf++;if(_0xeb88xb>=N){_0xeb88x2[0]=_0xeb88x2[N-1];_0xeb88xb=1;} ;if(_0xeb88xf>=_0xeb88xe){_0xeb88xf=0;} ;} ;for(_0xeb88x10=N-1;_0xeb88x10;_0xeb88x10--){_0xeb88x2[_0xeb88xb]=_0xeb88x6(_0xeb88x4((dbg=_0xeb88x2[_0xeb88xb])^_0xeb88x9(_0xeb88x4(_0xeb88x2[_0xeb88xb-1]^(_0xeb88x2[_0xeb88xb-1]>>>30)),1566083941)),_0xeb88xb);_0xeb88x2[_0xeb88xb]=_0xeb88x4(_0xeb88x2[_0xeb88xb]&0xffffffff);_0xeb88xb++;if(_0xeb88xb>=N){_0xeb88x2[0]=_0xeb88x2[N-1];_0xeb88xb=1;} ;} ;_0xeb88x2[0]=0x80000000;} ;this[_0x1808[2]]=function (){var _0xeb88x11;var _0xeb88x12= new Array(0x0,MATRIX_A);if(_0xeb88x3>=N){var _0xeb88x13;if(_0xeb88x3==N+1){this[_0x1808[0]](5489);} ;for(_0xeb88x13=0;_0xeb88x13<N-M;_0xeb88x13++){_0xeb88x11=_0xeb88x4((_0xeb88x2[_0xeb88x13]&UPPER_MASK)|(_0xeb88x2[_0xeb88x13+1]&LOWER_MASK));_0xeb88x2[_0xeb88x13]=_0xeb88x4(_0xeb88x2[_0xeb88x13+M]^(_0xeb88x11>>>1)^_0xeb88x12[_0xeb88x11&0x1]);} ;for(;_0xeb88x13<N-1;_0xeb88x13++){_0xeb88x11=_0xeb88x4((_0xeb88x2[_0xeb88x13]&UPPER_MASK)|(_0xeb88x2[_0xeb88x13+1]&LOWER_MASK));_0xeb88x2[_0xeb88x13]=_0xeb88x4(_0xeb88x2[_0xeb88x13+(M-N)]^(_0xeb88x11>>>1)^_0xeb88x12[_0xeb88x11&0x1]);} ;_0xeb88x11=_0xeb88x4((_0xeb88x2[N-1]&UPPER_MASK)|(_0xeb88x2[0]&LOWER_MASK));_0xeb88x2[N-1]=_0xeb88x4(_0xeb88x2[M-1]^(_0xeb88x11>>>1)^_0xeb88x12[_0xeb88x11&0x1]);_0xeb88x3=0;} ;_0xeb88x11=_0xeb88x2[_0xeb88x3++];_0xeb88x11=_0xeb88x4(_0xeb88x11^(_0xeb88x11>>>11));_0xeb88x11=_0xeb88x4(_0xeb88x11^((_0xeb88x11<<7)&0x9d2c5680));_0xeb88x11=_0xeb88x4(_0xeb88x11^((_0xeb88x11<<15)&0xefc60000));_0xeb88x11=_0xeb88x4(_0xeb88x11^(_0xeb88x11>>>18));return _0xeb88x11;} ;this[_0x1808[3]]=function (){return (this[_0x1808[2]]()>>>1);} ;this[_0x1808[4]]=function (){return this[_0x1808[2]]()*(1.0/4294967295.0);} ;this[_0x1808[5]]=function (){return this[_0x1808[2]]()*(1.0/4294967296.0);} ;this[_0x1808[6]]=function (){return ((this[_0x1808[2]]())+0.5)*(1.0/4294967296.0);} ;this[_0x1808[7]]=function (){var _0xeb88x14=this[_0x1808[2]]()>>>5,_0xeb88x15=this[_0x1808[2]]()>>>6;return (_0xeb88x14*67108864.0+_0xeb88x15)*(1.0/9007199254740992.0);} ;} ;
var _0x1ef5=["\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x67\x65\x6E\x65\x72\x61\x74\x6F\x72","\x69\x6E\x69\x74\x5F\x67\x65\x6E\x72\x61\x6E\x64","\x72\x61\x6E\x64\x6F\x6D\x49\x6E\x74","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x69\x6E\x74\x33\x32","\x72\x61\x6E\x64\x6F\x6D\x49\x6E\x74\x4D\x61\x78","\x72\x61\x6E\x64\x6F\x6D\x49\x6E\x74\x4D\x69\x6E\x4D\x61\x78","\x67\x65\x6E\x72\x61\x6E\x64\x5F\x72\x65\x61\x6C\x31"];var Random=function (_0x569ax2){if(_0x569ax2==undefined){_0x569ax2=Math[_0x1ef5[1]](Math[_0x1ef5[0]]()*0xffffffff);} ;this[_0x1ef5[2]]= new MersenneTwister19937();this[_0x1ef5[2]][_0x1ef5[3]](_0x569ax2);} ;Random[_0x1ef5[5]][_0x1ef5[4]]=function (){return this[_0x1ef5[2]][_0x1ef5[6]]();} ;Random[_0x1ef5[5]][_0x1ef5[7]]=function (_0x569ax3){return Math[_0x1ef5[1]](this[_0x1ef5[0]]()*(_0x569ax3+1));} ;Random[_0x1ef5[5]][_0x1ef5[8]]=function (_0x569ax4,_0x569ax3){return Math[_0x1ef5[1]]((this[_0x1ef5[0]]()*(_0x569ax3-_0x569ax4+1))+_0x569ax4);} ;Random[_0x1ef5[5]][_0x1ef5[0]]=function (){return this[_0x1ef5[2]][_0x1ef5[9]]();} ;
var _0xbade=["\x6D\x65\x74\x68\x6F\x64","\x4C\x49\x4E\x45\x41\x52","\x69\x6E\x74\x65\x72\x70\x6F\x6C\x61\x74\x65","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x43\x4F\x53\x49\x4E\x45","\x50\x49","\x63\x6F\x73","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x73\x65\x65\x64","\x67\x65\x6E\x65\x72\x61\x74\x6F\x72","\x69\x6E\x74\x65\x72\x70\x6F\x6C\x61\x74\x65\x4D\x65\x74\x68\x6F\x64","\x67\x65\x6E\x65\x72\x61\x74\x65\x57\x68\x69\x74\x65\x4E\x6F\x69\x73\x65","\x67\x65\x6E\x65\x72\x61\x74\x65\x53\x6D\x6F\x6F\x74\x68\x4E\x6F\x69\x73\x65","\x6C\x65\x6E\x67\x74\x68","\x70\x6F\x77","\x67\x65\x6E\x65\x72\x61\x74\x65\x50\x65\x72\x6C\x69\x6E\x4E\x6F\x69\x73\x65","\x74\x6F\x47\x72\x61\x79","\x61\x62\x73"];var LinerInterpolate=function (){this[_0xbade[0]]=_0xbade[1];} ;LinerInterpolate[_0xbade[3]][_0xbade[2]]=function (_0xbe4ax2,_0xbe4ax3,_0xbe4ax4){return (_0xbe4ax2*(1-_0xbe4ax4))+(_0xbe4ax4*_0xbe4ax3);} ;var CosineInterpolate=function (){this[_0xbade[0]]=_0xbade[4];} ;CosineInterpolate[_0xbade[3]][_0xbade[2]]=function (_0xbe4ax2,_0xbe4ax3,_0xbe4ax4){var _0xbe4ax6=_0xbe4ax2*Math[_0xbade[5]];var _0xbe4ax7=(1-Math[_0xbade[6]](_0xbe4ax6))*0.5;return _0xbe4ax2*(1-_0xbe4ax7)+_0xbe4ax3*_0xbe4ax7;} ;var Noise1D=function (_0xbe4ax9,_0xbe4axa){if(_0xbe4ax9==undefined){_0xbe4ax9=Math[_0xbade[8]](Math[_0xbade[7]]()*0xffffffff);} ;this[_0xbade[9]]=_0xbe4ax9;this[_0xbade[10]]= new Random(_0xbe4ax9);if(_0xbe4axa==undefined){_0xbe4axa= new LinerInterpolate;} ;this[_0xbade[11]]=_0xbe4axa;} ;Noise1D[_0xbade[3]][_0xbade[2]]=function (_0xbe4ax2,_0xbe4ax3,_0xbe4ax4){return this[_0xbade[11]][_0xbade[2]](_0xbe4ax2,_0xbe4ax3,_0xbe4ax4);} ;Noise1D[_0xbade[3]][_0xbade[12]]=function (_0xbe4axb){var _0xbe4axc= new Array();for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4axc[_0xbe4axd]=this[_0xbade[10]][_0xbade[7]]();} ;return _0xbe4axc;} ;Noise1D[_0xbade[3]][_0xbade[13]]=function (_0xbe4axe,_0xbe4axf){var _0xbe4axb=_0xbe4axe[_0xbade[14]];var _0xbe4ax10= new Array();var _0xbe4ax11=Math[_0xbade[15]](2,_0xbe4axf);var _0xbe4ax12=1.0/_0xbe4ax11;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){var _0xbe4ax13=Math[_0xbade[8]](_0xbe4axd/_0xbe4ax11)*_0xbe4ax11;var _0xbe4ax14=Math[_0xbade[8]]((_0xbe4ax13+_0xbe4ax11)%_0xbe4axb);var _0xbe4ax15=(_0xbe4axd-_0xbe4ax13)*_0xbe4ax12;_0xbe4ax10[_0xbe4axd]=this[_0xbade[2]](_0xbe4axe[_0xbe4ax13],_0xbe4axe[_0xbe4ax14],_0xbe4ax15);} ;return _0xbe4ax10;} ;Noise1D[_0xbade[3]][_0xbade[16]]=function (_0xbe4axe,_0xbe4ax16,_0xbe4ax17){if(_0xbe4ax17==undefined){_0xbe4axe=this[_0xbade[12]]();} ;if(_0xbe4ax16==undefined){_0xbe4ax16=4;} ;if(_0xbe4ax17==undefined){_0xbe4ax17=0.25;} ;var _0xbe4axb=_0xbe4axe[_0xbade[14]];var _0xbe4ax10= new Array();for(var _0xbe4ax18=0;_0xbe4ax18<_0xbe4ax16;_0xbe4ax18++){_0xbe4ax10[_0xbe4ax18]=this[_0xbade[13]](_0xbe4axe,_0xbe4ax18);} ;var _0xbe4ax19= new Array();for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4ax19[_0xbe4axd]=0;} ;var _0xbe4ax1a=1.0;var _0xbe4ax1b=0.0;for(var _0xbe4axf=_0xbe4ax16-1;_0xbe4axf>=0;_0xbe4axf--){_0xbe4ax1a*=_0xbe4ax17;_0xbe4ax1b+=_0xbe4ax1a;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4ax19[_0xbe4axd]+=_0xbe4ax10[_0xbe4axf][_0xbe4axd]*_0xbe4ax1a;} ;} ;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4ax19[_0xbe4axd]/=_0xbe4ax1b;} ;return _0xbe4ax19;} ;var Noise2D=function (_0xbe4ax9,_0xbe4axa){if(_0xbe4ax9==undefined){_0xbe4ax9=Math[_0xbade[8]](Math[_0xbade[7]]()*0xffffffff);} ;this[_0xbade[9]]=_0xbe4ax9;this[_0xbade[10]]= new Random(_0xbe4ax9);if(_0xbe4axa==undefined){_0xbe4axa= new LinerInterpolate;} ;this[_0xbade[11]]=_0xbe4axa;} ;Noise2D[_0xbade[3]][_0xbade[2]]=function (_0xbe4ax2,_0xbe4ax3,_0xbe4ax4){return this[_0xbade[11]][_0xbade[2]](_0xbe4ax2,_0xbe4ax3,_0xbe4ax4);} ;Noise2D[_0xbade[3]][_0xbade[12]]=function (_0xbe4axb,_0xbe4ax1d){var _0xbe4axc= new Array();for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4axc[_0xbe4axd]= new Array();for(var _0xbe4ax1e=0;_0xbe4ax1e<_0xbe4ax1d;_0xbe4ax1e++){_0xbe4axc[_0xbe4axd][_0xbe4ax1e]=this[_0xbade[10]][_0xbade[7]]();} ;} ;return _0xbe4axc;} ;Noise2D[_0xbade[3]][_0xbade[13]]=function (_0xbe4axe,_0xbe4axf){var _0xbe4axb=_0xbe4axe[_0xbade[14]];var _0xbe4ax1d=0;if(_0xbe4axb>0){_0xbe4ax1d=_0xbe4axe[0][_0xbade[14]];} ;var _0xbe4ax10= new Array();var _0xbe4ax11=Math[_0xbade[15]](2,_0xbe4axf);var _0xbe4ax12=1.0/_0xbe4ax11;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4ax10[_0xbe4axd]= new Array();var _0xbe4ax13=Math[_0xbade[8]](_0xbe4axd/_0xbe4ax11)*_0xbe4ax11;var _0xbe4ax14=Math[_0xbade[8]]((_0xbe4ax13+_0xbe4ax11)%_0xbe4axb);var _0xbe4ax15=(_0xbe4axd-_0xbe4ax13)*_0xbe4ax12;for(var _0xbe4ax1e=0;_0xbe4ax1e<_0xbe4ax1d;_0xbe4ax1e++){var _0xbe4ax1f=Math[_0xbade[8]](_0xbe4ax1e/_0xbe4ax11)*_0xbe4ax11;var _0xbe4ax20=Math[_0xbade[8]]((_0xbe4ax1f+_0xbe4ax11)%_0xbe4ax1d);var _0xbe4ax21=(_0xbe4ax1e-_0xbe4ax1f)*_0xbe4ax12;var _0xbe4ax22=this[_0xbade[2]](_0xbe4axe[_0xbe4ax13][_0xbe4ax1f],_0xbe4axe[_0xbe4ax14][_0xbe4ax1f],_0xbe4ax15);var _0xbe4ax23=this[_0xbade[2]](_0xbe4axe[_0xbe4ax13][_0xbe4ax20],_0xbe4axe[_0xbe4ax14][_0xbe4ax20],_0xbe4ax15);_0xbe4ax10[_0xbe4axd][_0xbe4ax1e]=this[_0xbade[2]](_0xbe4ax22,_0xbe4ax23,_0xbe4ax21);} ;} ;return _0xbe4ax10;} ;Noise2D[_0xbade[3]][_0xbade[16]]=function (_0xbe4axe,_0xbe4ax16,_0xbe4ax17){if(_0xbe4ax17==undefined){_0xbe4axe=this[_0xbade[12]]();} ;if(_0xbe4ax16==undefined){_0xbe4ax16=4;} ;if(_0xbe4ax17==undefined){_0xbe4ax17=0.25;} ;var _0xbe4axb=_0xbe4axe[_0xbade[14]];var _0xbe4ax1d=0;if(_0xbe4axb>0){_0xbe4ax1d=_0xbe4axe[0][_0xbade[14]];} ;var _0xbe4ax10= new Array();for(var _0xbe4ax18=0;_0xbe4ax18<_0xbe4ax16;_0xbe4ax18++){_0xbe4ax10[_0xbe4ax18]=this[_0xbade[13]](_0xbe4axe,_0xbe4ax18);} ;var _0xbe4ax19= new Array();for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){_0xbe4ax19[_0xbe4axd]= new Array();for(var _0xbe4ax1e=0;_0xbe4ax1e<_0xbe4ax1d;_0xbe4ax1e++){_0xbe4ax19[_0xbe4axd][_0xbe4ax1e]=0;} ;} ;var _0xbe4ax1a=1.0;var _0xbe4ax1b=0.0;for(var _0xbe4axf=_0xbe4ax16-1;_0xbe4axf>=0;_0xbe4axf--){_0xbe4ax1a*=_0xbe4ax17;_0xbe4ax1b+=_0xbe4ax1a;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){for(var _0xbe4ax1e=0;_0xbe4ax1e<_0xbe4ax1d;_0xbe4ax1e++){_0xbe4ax19[_0xbe4axd][_0xbe4ax1e]+=_0xbe4ax10[_0xbe4axf][_0xbe4axd][_0xbe4ax1e]*_0xbe4ax1a;} ;} ;} ;for(var _0xbe4axd=0;_0xbe4axd<_0xbe4axb;_0xbe4axd++){for(var _0xbe4ax1e=0;_0xbe4ax1e<_0xbe4ax1d;_0xbe4ax1e++){_0xbe4ax19[_0xbe4axd][_0xbe4ax1e]/=_0xbe4ax1b;} ;} ;return _0xbe4ax19;} ;Noise2D[_0xbade[3]][_0xbade[17]]=function (_0xbe4ax24){var _0xbe4ax25=Math[_0xbade[8]](255*Math[_0xbade[18]](_0xbe4ax24));return _0xbe4ax25;} ;
var _0x7f08=["\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x63\x61\x6E\x76\x61\x73","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x63\x6F\x6E\x74\x65\x78\x74","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x23\x38\x38\x38","\x66\x69\x6C\x6C\x52\x65\x63\x74","\x43\x61\x6E\x76\x61\x73\x20\x6E\x6F\x74\x20\x77\x6F\x72\x6B\x69\x6E\x67\x2E\x20\x53\x6F\x6D\x65\x74\x68\x69\x6E\x67\x20\x77\x65\x6E\x74\x20\x76\x65\x72\x79\x20\x77\x72\x6F\x6E\x67\x20\x68\x65\x72\x65\x2E","\x6C\x6F\x67","\x63\x6C\x65\x61\x72","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x57\x69\x64\x74\x68\x20\x6F\x72\x20\x48\x65\x69\x67\x68\x74\x20\x63\x61\x6E\x6E\x6F\x74\x20\x62\x65\x20\x7A\x65\x72\x6F\x2E","\x42\x6C\x6F\x63\x6B\x57\x69\x64\x74\x68\x20\x6F\x72\x20\x42\x6C\x6F\x63\x6B\x48\x65\x69\x67\x68\x74\x20\x63\x61\x6E\x6E\x6F\x74\x20\x62\x65\x20\x7A\x65\x72\x6F\x2E","\x62\x6C\x6F\x63\x6B\x57\x69\x64\x74\x68","\x62\x6C\x6F\x63\x6B\x48\x65\x69\x67\x68\x74","\x62\x6C\x6F\x63\x6B\x58","\x62\x6C\x6F\x63\x6B\x59"];var Display=function (_0xc695x2){var _0xc695x3=_0xc695x2[_0x7f08[1]](_0x7f08[0]);if(_0xc695x2!=null&&_0xc695x3!=null){this[_0x7f08[2]]=_0xc695x2;this[_0x7f08[3]]=_0xc695x2[_0x7f08[3]];this[_0x7f08[4]]=_0xc695x2[_0x7f08[4]];this[_0x7f08[5]]=_0xc695x3;this[_0x7f08[5]][_0x7f08[6]]=_0x7f08[7];this[_0x7f08[5]][_0x7f08[8]](0,0,display[_0x7f08[3]],display[_0x7f08[4]]);} else {console[_0x7f08[10]](_0x7f08[9]);} ;} ;Display[_0x7f08[12]][_0x7f08[11]]=function (){this[_0x7f08[5]][_0x7f08[6]]=_0x7f08[7];this[_0x7f08[5]][_0x7f08[8]](0,0,display[_0x7f08[3]],display[_0x7f08[4]]);} ;var Blocks=function (_0xc695x5,_0xc695x6,_0xc695x7,_0xc695x8){if(_0xc695x5==0||_0xc695x6==0){console[_0x7f08[10]](_0x7f08[13]);return ;} ;if(_0xc695x7==0||_0xc695x8==0){console[_0x7f08[10]](_0x7f08[14]);return ;} ;this[_0x7f08[3]]=_0xc695x5;this[_0x7f08[4]]=_0xc695x6;this[_0x7f08[15]]=_0xc695x7;this[_0x7f08[16]]=_0xc695x8;this[_0x7f08[17]]=this[_0x7f08[3]]/this[_0x7f08[15]];this[_0x7f08[18]]=this[_0x7f08[4]]/this[_0x7f08[16]];} ;

var _0x9ab4=["\x64\x69\x73\x70\x6C\x61\x79","\x62\x79\x49\x64","\x63\x6C\x65\x61\x72","\x76\x61\x6C\x75\x65","\x62\x6C\x6F\x63\x6B\x73\x69\x7A\x65","\x36","\x73\x65\x65\x64","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x63\x65","\x6F\x63\x74\x61\x76\x65\x73","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x62\x6C\x6F\x63\x6B\x58","\x62\x6C\x6F\x63\x6B\x59","\x42\x6C\x6F\x63\x6B\x53\x69\x7A\x65\x3A","\x20\x53\x65\x65\x64\x3A","\x20\x6F\x63\x74\x61\x76\x65\x73\x3A","\x20\x50\x65\x72\x73\x69\x73\x74\x65\x6E\x63\x65\x3A","\x6C\x6F\x67","\x67\x65\x6E\x65\x72\x61\x74\x65\x57\x68\x69\x74\x65\x4E\x6F\x69\x73\x65","\x67\x65\x6E\x65\x72\x61\x74\x65\x50\x65\x72\x6C\x69\x6E\x4E\x6F\x69\x73\x65","\x63\x72\x65\x61\x74\x65\x49\x6D\x61\x67\x65\x44\x61\x74\x61","\x63\x6F\x6E\x74\x65\x78\x74","\x64\x61\x74\x61","\x74\x6F\x47\x72\x61\x79","\x70\x75\x74\x49\x6D\x61\x67\x65\x44\x61\x74\x61","\x62\x6C\x6F\x63\x6B\x57\x69\x64\x74\x68","\x62\x6C\x6F\x63\x6B\x48\x65\x69\x67\x68\x74","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x72\x67\x62\x61\x28","\x2C","\x2C\x32\x35\x35\x29","\x66\x69\x6C\x6C\x52\x65\x63\x74"];function init(){display= new Display(dojo[_0x9ab4[1]](_0x9ab4[0]));baseExample1D=[0.2486686,0.110744,0.4670107,0.7716041,0.6575189,0.4327826,0.3540838,0.9438623,0.1012665,0.6424556];baseExample2D=[[0.2486686,0.110744,0.4670107,0.7716041,0.6575189,0.4327826,0.3540838,0.9438623,0.1012665,0.6424556],[0.02863681,0.2480291,0.3201101,0.9897671,0.6821231,0.6548879,0.2827292,0.6153464,0.7042515,0.7017967],[0.9497784,0.09338848,0.1609072,0.3819711,0.7979477,0.1694672,0.7937836,0.3072282,0.8230284,0.8864695],[0.5563023,0.716734,0.6992958,0.0136144,0.9918761,0.8063016,0.8587436,0.06250332,0.5143937,0.5252582],[0.2728252,0.9937963,0.6911044,0.3866155,0.4343339,0.6754055,0.6773817,0.4728747,0.2445188,0.3534841],[0.5262526,0.1694273,0.3465878,0.691695,0.3951431,0.1552801,0.9498368,0.0850396,0.9736564,0.4880517],[0.638999,0.04685552,0.1208338,0.2147969,0.08615324,0.3119028,0.5487333,0.3064957,0.9978911,0.8758215],[0.7961443,0.2202259,0.1009527,0.1789933,0.4289715,0.9559821,0.4022841,0.7742917,0.9476371,0.1225422],[0.4920855,0.3209089,0.0627095,0.4695443,0.3602169,0.386875,0.3701462,0.007600868,0.6184713,0.836596],[0.8564648,0.773704,0.0888469,0.02634201,0.8862593,0.2259696,0.8729625,0.4763075,0.3004622,0.1224311]];} ;function handleNoiseDraw(){display[_0x9ab4[2]]();var _0xba61x3=dojo[_0x9ab4[1]](_0x9ab4[4])[_0x9ab4[3]];if(_0xba61x3===undefined||_0xba61x3==null){_0xba61x3=_0x9ab4[5];} ;var _0xba61x4=dojo[_0x9ab4[1]](_0x9ab4[6])[_0x9ab4[3]];if(_0xba61x4===undefined||_0xba61x4==null){_0xba61x4=Math[_0x9ab4[8]](Math[_0x9ab4[7]]()*0xfffffff);} ;var _0xba61x5=dojo[_0x9ab4[1]](_0x9ab4[9])[_0x9ab4[3]];if(_0xba61x5===undefined||_0xba61x5==null){_0xba61x5=0.5;} ;var _0xba61x6=dojo[_0x9ab4[1]](_0x9ab4[10])[_0x9ab4[3]];if(_0xba61x6===undefined||_0xba61x6==null){_0xba61x6=4;} ;var _0xba61x7=parseInt(_0xba61x3);var _0xba61x8=parseInt(_0xba61x4);var _0xba61x9=parseFloat(_0xba61x5);var _0xba61xa=parseInt(_0xba61x6);var _0xba61xb= new Blocks(display[_0x9ab4[11]],display[_0x9ab4[12]],_0xba61x7,_0xba61x7);var _0xba61xc=_0xba61xb[_0x9ab4[13]];var _0xba61xd=_0xba61xb[_0x9ab4[14]];console[_0x9ab4[19]](_0x9ab4[15]+_0xba61x7+_0x9ab4[16]+_0xba61x8+_0x9ab4[17]+_0xba61xa+_0x9ab4[18]+_0xba61x9);var _0xba61xe= new Noise2D(_0xba61x8);var _0xba61xf=_0xba61xe[_0x9ab4[20]](_0xba61xc,_0xba61xd);var _0xba61x10=_0xba61xe[_0x9ab4[21]](_0xba61xf,_0xba61xa,_0xba61x9);var _0xba61x11=display[_0x9ab4[23]][_0x9ab4[22]](1,1);var _0xba61x12=_0xba61x11[_0x9ab4[24]];if(_0xba61x7==1){for(_0xba61x14=0;_0xba61x14<_0xba61xc;_0xba61x14++){for(_0xba61x15=0;_0xba61x15<_0xba61xd;_0xba61x15++){var _0xba61x13=_0xba61xe[_0x9ab4[25]](_0xba61x10[_0xba61x14][_0xba61x15]);_0xba61x12[0]=_0xba61x13;_0xba61x12[1]=_0xba61x13;_0xba61x12[2]=_0xba61x13;_0xba61x12[3]=255;display[_0x9ab4[23]][_0x9ab4[26]](_0xba61x11,_0xba61x14,_0xba61x15);} ;} ;} else {for(var _0xba61x14=0;_0xba61x14<_0xba61xc;_0xba61x14++){for(var _0xba61x15=0;_0xba61x15<_0xba61xd;_0xba61x15++){var _0xba61x16=(_0xba61x14*_0xba61xb[_0x9ab4[27]]);var _0xba61x17=(_0xba61x15*_0xba61xb[_0x9ab4[28]]);var _0xba61x13=_0xba61xe[_0x9ab4[25]](_0xba61x10[_0xba61x14][_0xba61x15]);display[_0x9ab4[23]][_0x9ab4[29]]=_0x9ab4[30]+_0xba61x13+_0x9ab4[31]+_0xba61x13+_0x9ab4[31]+_0xba61x13+_0x9ab4[32];display[_0x9ab4[23]][_0x9ab4[33]](_0xba61x16,_0xba61x17,_0xba61x16+_0xba61xb[_0x9ab4[27]],_0xba61x17+_0xba61xb[_0x9ab4[28]]);} ;} ;} ;} ;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(u(){o g="Z+/";o p=1a Y(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,X,-1,-1,-1,V,W,1b,1c,1g,U,1f,1d,1e,1i,x,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,L,H,I,J,G,K,-1,-1,-1,-1,-1,-1,R,S,P,O,Q,N,M,T,1h,1o,1A,1B,1z,1y,1w,1x,1D,1j,1E,1F,1C,1u,1n,1v,1m,1q,-1,-1,-1,-1,-1);u E(f){o a,i,d;o c,e,b;d=f.z;i=0;a="";n(i<d){c=f.l(i++)&q;h(i==d){a+=g.j(c>>2);a+=g.j((c&v)<<4);a+="==";m}e=f.l(i++);h(i==d){a+=g.j(c>>2);a+=g.j(((c&v)<<4)|((e&D)>>4));a+=g.j((e&F)<<2);a+="=";m}b=f.l(i++);a+=g.j(c>>2);a+=g.j(((c&v)<<4)|((e&D)>>4));a+=g.j(((e&F)<<2)|((b&1r)>>6));a+=g.j(b&1s)}s a}u C(f){o c,e,b,k;o i,d,a;d=f.z;i=0;a="";n(i<d){r{c=p[f.l(i++)&q]}n(i<d&&c==-1);h(c==-1)m;r{e=p[f.l(i++)&q]}n(i<d&&e==-1);h(e==-1)m;a+=y.w((c<<2)|((e&1t)>>4));r{b=f.l(i++)&q;h(b==x)s a;b=p[b]}n(i<d&&b==-1);h(b==-1)m;a+=y.w(((e&1p)<<4)|((b&1k)>>2));r{k=f.l(i++)&q;h(k==x)s a;k=p[k]}n(i<d&&k==-1);h(k==-1)m;a+=y.w(((b&1l)<<6)|k)}s a}h(!t.B)t.B=E;h(!t.A)t.A=C})();',62,104,'||||||||||out|c3|c1|len|c2|str|base64EncodeChars|if||charAt|c4|charCodeAt|break|while|var|base64DecodeChars|0xff|do|return|window|function|0x3|fromCharCode|61|String|length|atob|btoa|base64decode|0xF0|base64encode|0xF|24|21|22|23|25|20|32|31|29|28|30|26|27|33|56|63|52|62|Array|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|||||||||||new|53|54|58|59|57|55|34|60|43|0x3C|0x03|50|48|35|0XF|51|0xC0|0x3F|0x30|47|49|40|41|39|38|36|37|46|42|44|45'.split('|'),0,{}))
var _0xd641=["\x63\x61\x6E\x76\x61\x73","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x67\x65\x74\x49\x6D\x61\x67\x65\x44\x61\x74\x61","\x74\x6F\x44\x61\x74\x61\x55\x52\x4C","\x62\x74\x6F\x61","\x69\x6D\x61\x67\x65\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","","\x73\x74\x72\x69\x6E\x67","\x6C\x65\x6E\x67\x74\x68","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6C\x6F\x6F\x72","\x64\x61\x74\x61","\x63\x6F\x6E\x63\x61\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x64\x61\x74\x61\x3A","\x3B\x62\x61\x73\x65\x36\x34\x2C","\x69\x6D\x67","\x73\x72\x63","\x73\x74\x79\x6C\x65","\x70\x78","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x69\x6E\x64\x65\x78\x4F\x66","\x69\x6D\x61\x67\x65\x2F\x62\x6D\x70"];var Canvas2Image=(function (){var _0xd794x2=false;var _0xd794x3=document[_0xd641[1]](_0xd641[0]);if(_0xd794x3[_0xd641[3]](_0xd641[2])){_0xd794x2=true;} ;if(!_0xd794x2){return {saveAsBMP:function (){} ,saveAsPNG:function (){} ,saveAsJPEG:function (){} };} ;var _0xd794x4=!!(_0xd794x3[_0xd641[3]](_0xd641[2])[_0xd641[4]]);var _0xd794x5=!!(_0xd794x3[_0xd641[5]]);var _0xd794x6=!!(window[_0xd641[6]]);var _0xd794x7=_0xd641[7];var _0xd794x8=function (_0xd794x3){var _0xd794x9=parseInt(_0xd794x3[_0xd641[8]]);var _0xd794xa=parseInt(_0xd794x3[_0xd641[9]]);return _0xd794x3[_0xd641[3]](_0xd641[2])[_0xd641[4]](0,0,_0xd794x9,_0xd794xa);} ;var _0xd794xb=function (_0xd794xc){var _0xd794xd=_0xd641[10];if( typeof _0xd794xc==_0xd641[11]){_0xd794xd=_0xd794xc;} else {var _0xd794xe=_0xd794xc;for(var _0xd794xf=0;_0xd794xf<_0xd794xe[_0xd641[12]];_0xd794xf++){_0xd794xd+=String[_0xd641[13]](_0xd794xe[_0xd794xf]);} ;} ;return btoa(_0xd794xd);} ;var _0xd794x10=function (_0xd794x11){var _0xd794x12=[];var _0xd794x9=_0xd794x11[_0xd641[8]];var _0xd794xa=_0xd794x11[_0xd641[9]];_0xd794x12[_0xd641[14]](0x42);_0xd794x12[_0xd641[14]](0x4D);var _0xd794x13=_0xd794x9*_0xd794xa*3+54;_0xd794x12[_0xd641[14]](_0xd794x13%256);_0xd794x13=Math[_0xd641[15]](_0xd794x13/256);_0xd794x12[_0xd641[14]](_0xd794x13%256);_0xd794x13=Math[_0xd641[15]](_0xd794x13/256);_0xd794x12[_0xd641[14]](_0xd794x13%256);_0xd794x13=Math[_0xd641[15]](_0xd794x13/256);_0xd794x12[_0xd641[14]](_0xd794x13%256);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](54);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](0);_0xd794x12[_0xd641[14]](0);var _0xd794x14=[];_0xd794x14[_0xd641[14]](40);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);var _0xd794x15=_0xd794x9;_0xd794x14[_0xd641[14]](_0xd794x15%256);_0xd794x15=Math[_0xd641[15]](_0xd794x15/256);_0xd794x14[_0xd641[14]](_0xd794x15%256);_0xd794x15=Math[_0xd641[15]](_0xd794x15/256);_0xd794x14[_0xd641[14]](_0xd794x15%256);_0xd794x15=Math[_0xd641[15]](_0xd794x15/256);_0xd794x14[_0xd641[14]](_0xd794x15%256);var _0xd794x16=_0xd794xa;_0xd794x14[_0xd641[14]](_0xd794x16%256);_0xd794x16=Math[_0xd641[15]](_0xd794x16/256);_0xd794x14[_0xd641[14]](_0xd794x16%256);_0xd794x16=Math[_0xd641[15]](_0xd794x16/256);_0xd794x14[_0xd641[14]](_0xd794x16%256);_0xd794x16=Math[_0xd641[15]](_0xd794x16/256);_0xd794x14[_0xd641[14]](_0xd794x16%256);_0xd794x14[_0xd641[14]](1);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](24);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);_0xd794x14[_0xd641[14]](0);var _0xd794x17=_0xd794x9*_0xd794xa*3;_0xd794x14[_0xd641[14]](_0xd794x17%256);_0xd794x17=Math[_0xd641[15]](_0xd794x17/256);_0xd794x14[_0xd641[14]](_0xd794x17%256);_0xd794x17=Math[_0xd641[15]](_0xd794x17/256);_0xd794x14[_0xd641[14]](_0xd794x17%256);_0xd794x17=Math[_0xd641[15]](_0xd794x17/256);_0xd794x14[_0xd641[14]](_0xd794x17%256);for(var _0xd794xf=0;_0xd794xf<16;_0xd794xf++){_0xd794x14[_0xd641[14]](0);} ;var _0xd794x18=(4-((_0xd794x9*3)%4))%4;var _0xd794x19=_0xd794x11[_0xd641[16]];var _0xd794x1a=_0xd641[10];var _0xd794x1b=_0xd794xa;do{var _0xd794x1c=_0xd794x9*(_0xd794x1b-1)*4;var _0xd794x1d=_0xd641[10];for(var _0xd794x1e=0;_0xd794x1e<_0xd794x9;_0xd794x1e++){var _0xd794x1f=4*_0xd794x1e;_0xd794x1d+=String[_0xd641[13]](_0xd794x19[_0xd794x1c+_0xd794x1f+2]);_0xd794x1d+=String[_0xd641[13]](_0xd794x19[_0xd794x1c+_0xd794x1f+1]);_0xd794x1d+=String[_0xd641[13]](_0xd794x19[_0xd794x1c+_0xd794x1f]);} ;for(var _0xd794x20=0;_0xd794x20<_0xd794x18;_0xd794x20++){_0xd794x1d+=String[_0xd641[13]](0);} ;_0xd794x1a+=_0xd794x1d;} while(--_0xd794x1b);;var _0xd794x21=_0xd794xb(_0xd794x12[_0xd641[17]](_0xd794x14))+_0xd794xb(_0xd794x1a);return _0xd794x21;} ;var _0xd794x22=function (_0xd794xd){document[_0xd641[19]][_0xd641[18]]=_0xd794xd;} ;var _0xd794x23=function (_0xd794xd,_0xd794x24){return _0xd641[20]+_0xd794x24+_0xd641[21]+_0xd794xd;} ;var _0xd794x25=function (_0xd794x26){var _0xd794x27=document[_0xd641[1]](_0xd641[22]);_0xd794x27[_0xd641[23]]=_0xd794x26;return _0xd794x27;} ;var _0xd794x28=function (_0xd794x3,_0xd794x9,_0xd794xa){if(_0xd794x9&&_0xd794xa){var _0xd794x29=document[_0xd641[1]](_0xd641[0]);_0xd794x29[_0xd641[8]]=_0xd794x9;_0xd794x29[_0xd641[9]]=_0xd794xa;_0xd794x29[_0xd641[24]][_0xd641[8]]=_0xd794x9+_0xd641[25];_0xd794x29[_0xd641[24]][_0xd641[9]]=_0xd794xa+_0xd641[25];var _0xd794x2a=_0xd794x29[_0xd641[3]](_0xd641[2]);_0xd794x2a[_0xd641[26]](_0xd794x3,0,0,_0xd794x3[_0xd641[8]],_0xd794x3[_0xd641[9]],0,0,_0xd794x9,_0xd794xa);return _0xd794x29;} ;return _0xd794x3;} ;return {saveAsPNG:function (_0xd794x3,_0xd794x2b,_0xd794x9,_0xd794xa){if(!_0xd794x5){return false;} ;var _0xd794x2c=_0xd794x28(_0xd794x3,_0xd794x9,_0xd794xa);var _0xd794xd=_0xd794x2c[_0xd641[5]](_0xd641[27]);if(_0xd794x2b){return _0xd794x25(_0xd794xd);} else {_0xd794x22(_0xd794xd[_0xd641[28]](_0xd641[27],_0xd794x7));} ;return true;} ,saveAsJPEG:function (_0xd794x3,_0xd794x2b,_0xd794x9,_0xd794xa){if(!_0xd794x5){return false;} ;var _0xd794x2c=_0xd794x28(_0xd794x3,_0xd794x9,_0xd794xa);var _0xd794x24=_0xd641[29];var _0xd794xd=_0xd794x2c[_0xd641[5]](_0xd794x24);if(_0xd794xd[_0xd641[30]](_0xd794x24)!=5){return false;} ;if(_0xd794x2b){return _0xd794x25(_0xd794xd);} else {_0xd794x22(_0xd794xd[_0xd641[28]](_0xd794x24,_0xd794x7));} ;return true;} ,saveAsBMP:function (_0xd794x3,_0xd794x2b,_0xd794x9,_0xd794xa){if(!(_0xd794x4&&_0xd794x6)){return false;} ;var _0xd794x2c=_0xd794x28(_0xd794x3,_0xd794x9,_0xd794xa);var _0xd794x11=_0xd794x8(_0xd794x2c);var _0xd794x2d=_0xd794x10(_0xd794x11);if(_0xd794x2b){return _0xd794x25(_0xd794x23(_0xd794x2d,_0xd641[31]));} else {_0xd794x22(_0xd794x23(_0xd794x2d,_0xd794x7));} ;return true;} };} )();

