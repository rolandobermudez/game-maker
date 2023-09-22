﻿class _t3{constructor(_u3){this._v3=0;this._w3=0;this.feedback=0;this._x3=0;this.buffer=new Float32Array(_u3);this._y3=0;}process(_z3){const out=this.buffer[this._y3];this._x3=(this._x3*this._v3)+(out*this._w3);this.buffer[this._y3]=_z3+(this._x3*this.feedback);++this._y3;this._y3%=this.buffer.length;return out;}_A3(_B3){this.feedback=Math.min(Math.max(0,_B3),1);}_C3(_D3){this._v3=Math.min(Math.max(0,_D3),1);this._w3=1-this._v3;}}class _E3{constructor(_u3){this.feedback=0;this.buffer=new Float32Array(_u3);
this._y3=0;}process(_z3){const out=this.buffer[this._y3];this.buffer[this._y3]=_z3+(out*this.feedback);++this._y3;this._y3%=this.buffer.length;return(out-_z3);}_A3(_B3){this.feedback=Math.min(Math.max(0,_B3),1);}}class _F3 extends AudioWorkletProcessor{static _G3=8;static _H3=4;static _I3=0.015;static _J3=0.4;static _K3=0.28;static _L3=0.7;static _M3=[1116,1188,1277,1356,1422,1491,1557,1617];static _N3=[1139,1211,1300,1379,1445,1514,1580,1640];static _O3=[556,441,341,225];static _P3=[579,464,364,248];static get parameterDescriptors(){
return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"size",automationRate:"a-rate",defaultValue:0.7,minValue:0.0,maxValue:1.0},{name:"damp",automationRate:"a-rate",defaultValue:0.1,minValue:0.0,maxValue:1.0},{name:"mix",automationRate:"a-rate",defaultValue:0.35,minValue:0.0,maxValue:1.0}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._T3=-1;this._U3=-1;this._V3=new Array(_S3);this._W3=new Array(_S3);const _X3=[_F3._M3,_F3._N3];const _Y3=[_F3._O3,
_F3._P3];for(let _Z3=0;_Z3<_S3;++_Z3){this._V3[_Z3]=new Array(_F3._G3);this._W3[_Z3]=new Array(_F3._H3);for(let __3=0;__3<_F3._G3;++__3)this._V3[_Z3][__3]=new _t3(_X3[_Z3%_X3.length][__3]);for(let __3=0;__3<_F3._H3;++__3)this._W3[_Z3][__3]=new _E3(_Y3[_Z3%_Y3.length][__3]);}this._04(0.5);this._C3(0.5);for(let _Z3=0;_Z3<_S3;++_Z3)for(let __3=0;__3<_F3._H3;++__3)this._W3[_Z3][__3]._A3(0.5);}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const size=parameters.size;
const damp=parameters.damp;const mix=parameters.mix;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){const _54=(size[_54]!==undefined)?size[_54]:size[0];const _64=(damp[_54]!==undefined)?damp[_54]:damp[0];this._04(_54);this._C3(_64);_44[_54]=_34[_54];let out=0;const _74=_34[_54]*_F3._I3;for(let __3=0;__3<_F3._G3;++__3)out+=this._V3[_Z3][__3].process(_74);for(let __3=0;__3<_F3._H3;++__3)out=this._W3[_Z3][__3].process(out);const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];
if(_84>0.0){continue;}const _94=(mix[_54]!==undefined)?mix[_54]:mix[0];_44[_54]*=(1-_94);_44[_54]+=(out*_94);}}return this._a4;}_04(_u3){if(_u3===this._T3)return;const size=(_u3*_F3._K3)+_F3._L3;for(let _Z3=0;_Z3<this._V3.length;++_Z3)for(let __3=0;__3<_F3._G3;++__3)this._V3[_Z3][__3]._A3(size);this._T3=_u3;}_C3(_D3){if(_D3===this._U3)return;const damp=_D3*_F3._J3;for(let _Z3=0;_Z3<this._V3.length;++_Z3)for(let __3=0;__3<_F3._G3;++__3)this._V3[_Z3][__3]._C3(damp);this._U3=_D3;}}registerProcessor("reverb1-processor",
_F3);class _b4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [];}constructor(){super();this._R3();}process(_c4,_d4,_e4){const input=_c4[0];const _f4=_d4[0];const _g4=_d4[1];for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _h4=_f4[_Z3];const _i4=_g4[_Z3];for(let _54=0;_54<_34.length;++_54){_h4[_54]=_34[_54];_i4[_54]=_34[_54];}}return this._a4;}}class _j4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,
minValue:0,maxValue:1}];}constructor(){super();this._R3();}process(_c4,_d4,_e4){const _k4=_c4[0];const _l4=_c4[1];const output=_d4[0];const bypass=_e4.bypass;for(let _Z3=0;_Z3<_l4.length;++_Z3){const _m4=_k4[_Z3];const _n4=_l4[_Z3];const _44=output[_Z3];for(let _54=0;_54<_m4.length;++_54){const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0){_44[_54]=_n4[_54];}else {_44[_54]=_m4[_54];}}}return this._a4;}}registerProcessor("eq-input",_b4);registerProcessor("eq-output",_j4);class _o4 extends AudioWorkletProcessor{
static get parameterDescriptors(){const _p4=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"cutoff",automationRate:"a-rate",defaultValue:Math.min(500.0,_p4),minValue:10.0,maxValue:_p4},{name:"q",automationRate:"a-rate",defaultValue:1.5,minValue:1.0,maxValue:100.0}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._q4=0;this._r4=0;this._s4=0;this._t4=0;this._u4=0;this._v4=new Float32Array(_S3);this._w4=new Float32Array(_S3);
this._x4=new Float32Array(_S3);this._y4=new Float32Array(_S3);this._z4=-1;this._A4=-1;}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const cutoff=parameters.cutoff;const q=parameters.q;const _B4=(cutoff.length===1&&q.length===1);if(_B4)this._C4(cutoff[0],q[0]);for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){if(_B4===!1){const _Z3=(cutoff[_54]!==undefined)?cutoff[_54]:cutoff[0];const _D4=(q[_54]!==undefined)?q[_54]:q[0];
this._C4(_Z3,_D4);}const _E4=this._s4*_34[_54]+this._t4*this._v4[_Z3]+this._u4*this._w4[_Z3]-this._q4*this._x4[_Z3]-this._r4*this._y4[_Z3];this._w4[_Z3]=this._v4[_Z3];this._v4[_Z3]=_34[_54];this._y4[_Z3]=this._x4[_Z3];this._x4[_Z3]=_E4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_44[_54]=(_84>0)?_34[_54]:_E4;}}return this._a4;}_C4(_F4,_G4){if(_F4===this._z4&&_G4===this._A4)return;const _H4=2*Math.PI*_F4/sampleRate;const alpha=Math.sin(_H4)/(2*_G4);const _I4=Math.cos(_H4);const _J4=1+alpha;
const _q4=-2*_I4;const _r4=1-alpha;const _s4=(1-_I4)/2;const _t4=1-_I4;const _u4=(1-_I4)/2;this._q4=_q4/_J4;this._r4=_r4/_J4;this._s4=_s4/_J4;this._t4=_t4/_J4;this._u4=_u4/_J4;this._z4=_F4;this._A4=_G4;}}registerProcessor("lpf2-processor",_o4);class _K4 extends AudioWorkletProcessor{static get parameterDescriptors(){const _L4=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",defaultValue:Math.min(1500.0,
_L4),minValue:10.0,maxValue:_L4},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._q4=0;this._r4=0;this._s4=0;this._t4=0;this._u4=0;this._v4=new Float32Array(_S3);this._w4=new Float32Array(_S3);this._x4=new Float32Array(_S3);this._y4=new Float32Array(_S3);this._M4=-1;this._A4=-1;this._N4=-1;}process(_14,_24,parameters){const input=_14[0];
const output=_24[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _B4=(freq.length===1&&q.length===1&&gain.length===1);if(_B4)this._C4(freq[0],q[0],gain[0]);for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){if(_B4===!1){const _O4=(freq[_54]!==undefined)?freq[_54]:freq[0];const _D4=(q[_54]!==undefined)?q[_54]:q[0];const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];this._C4(_O4,
_D4,_P4);}const _E4=this._s4*_34[_54]+this._t4*this._v4[_Z3]+this._u4*this._w4[_Z3]-this._q4*this._x4[_Z3]-this._r4*this._y4[_Z3];this._w4[_Z3]=this._v4[_Z3];this._v4[_Z3]=_34[_54];this._y4[_Z3]=this._x4[_Z3];this._x4[_Z3]=_E4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_44[_54]=(_84>0)?_34[_54]:_E4;}}return this._a4;}_C4(_Q4,_G4,_R4){if(_Q4===this._M4&&_G4===this._A4&&_R4===this._N4)return;const _H4=2*Math.PI*_Q4/sampleRate;const _I4=Math.cos(_H4);const _S4=Math.sqrt(_R4);const alpha=Math.sin(_H4)/(2*_G4);
const _T4=alpha/_S4;const _U4=alpha*_S4;const _J4=1+_T4;const _q4=-2*_I4;const _r4=1-_T4;const _s4=1+_U4;const _t4=_q4;const _u4=1-_U4;this._q4=_q4/_J4;this._r4=_r4/_J4;this._s4=_s4/_J4;this._t4=_t4/_J4;this._u4=_u4/_J4;this._M4=_Q4;this._A4=_G4;this._N4=_R4;}}registerProcessor("peak-eq-processor",_K4);class _V4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"gain",automationRate:"a-rate",defaultValue:0.5,
minValue:0.0}];}constructor(){super();this._R3();}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const gain=parameters.gain;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){_44[_54]=_34[_54];const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0.0){continue;}const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];_44[_54]*=_P4;}}return this._a4;}}registerProcessor("gain-processor",
_V4);class _W4 extends AudioWorkletProcessor{static get parameterDescriptors(){const _p4=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"cutoff",automationRate:"a-rate",defaultValue:Math.min(1500.0,_p4),minValue:10.0,maxValue:_p4},{name:"q",automationRate:"a-rate",defaultValue:1.5,minValue:1.0,maxValue:100.0}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._q4=0;this._r4=0;this._s4=0;this._t4=0;this._u4=0;
this._v4=new Float32Array(_S3);this._w4=new Float32Array(_S3);this._x4=new Float32Array(_S3);this._y4=new Float32Array(_S3);this._z4=-1;this._A4=-1;}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const cutoff=parameters.cutoff;const q=parameters.q;const _B4=(cutoff.length===1&&q.length===1);if(_B4)this._C4(cutoff[0],q[0]);for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){if(_B4===!1){const _Z3=(cutoff[_54]!==undefined)?cutoff[_54]:cutoff[0];
const _D4=(q[_54]!==undefined)?q[_54]:q[0];this._C4(_Z3,_D4);}const _E4=this._s4*_34[_54]+this._t4*this._v4[_Z3]+this._u4*this._w4[_Z3]-this._q4*this._x4[_Z3]-this._r4*this._y4[_Z3];this._w4[_Z3]=this._v4[_Z3];this._v4[_Z3]=_34[_54];this._y4[_Z3]=this._x4[_Z3];this._x4[_Z3]=_E4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_44[_54]=(_84>0)?_34[_54]:_E4;}}return this._a4;}_C4(_F4,_G4){if(_F4===this._z4&&_G4===this._A4)return;const _H4=2*Math.PI*_F4/sampleRate;const alpha=Math.sin(_H4)/(2*_G4);
const _I4=Math.cos(_H4);const _J4=1+alpha;const _q4=-2*_I4;const _r4=1-alpha;const _s4=(1+_I4)/2;const _t4=-1-_I4;const _u4=(1+_I4)/2;this._q4=_q4/_J4;this._r4=_r4/_J4;this._s4=_s4/_J4;this._t4=_t4/_J4;this._u4=_u4/_J4;this._z4=_F4;this._A4=_G4;}}registerProcessor("hpf2-processor",_W4);class _X4 extends AudioWorkletProcessor{static get parameterDescriptors(){const _L4=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",
defaultValue:Math.min(5000.0,_L4),minValue:10.0,maxValue:_L4},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._q4=0;this._r4=0;this._s4=0;this._t4=0;this._u4=0;this._v4=new Float32Array(_S3);this._w4=new Float32Array(_S3);this._x4=new Float32Array(_S3);this._y4=new Float32Array(_S3);this._M4=-1;this._A4=-1;this._N4=-1;}process(_14,
_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _B4=(freq.length===1&&q.length===1&&gain.length===1);if(_B4)this._C4(freq[0],q[0],gain[0]);for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){if(_B4===!1){const _O4=(freq[_54]!==undefined)?freq[_54]:freq[0];const _D4=(q[_54]!==undefined)?q[_54]:q[0];const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];
this._C4(_O4,_D4,_P4);}const _E4=this._s4*_34[_54]+this._t4*this._v4[_Z3]+this._u4*this._w4[_Z3]-this._q4*this._x4[_Z3]-this._r4*this._y4[_Z3];this._w4[_Z3]=this._v4[_Z3];this._v4[_Z3]=_34[_54];this._y4[_Z3]=this._x4[_Z3];this._x4[_Z3]=_E4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_44[_54]=(_84>0)?_34[_54]:_E4;}}return this._a4;}_C4(_Q4,_G4,_R4){if(_Q4===this._M4&&_G4===this._A4&&_R4===this._N4)return;const _H4=2*Math.PI*_Q4/sampleRate;const _I4=Math.cos(_H4);const _S4=Math.sqrt(_R4);const _Y4=_S4+1;
const _Z4=_S4-1;const __4=_Y4*_I4;const _05=_Z4*_I4;const _15=_Y4-_05;const _25=_Y4+_05;const alpha=Math.sin(_H4)/(2*_G4);const _35=(2*Math.sqrt(_S4)*alpha);const _J4=_15+_35;const _q4=2*(_Z4-__4);const _r4=_15-_35;const _s4=_S4*(_25+_35);const _t4=-2*_S4*(_Z4+__4);const _u4=_S4*(_25-_35);this._q4=_q4/_J4;this._r4=_r4/_J4;this._s4=_s4/_J4;this._t4=_t4/_J4;this._u4=_u4/_J4;this._M4=_Q4;this._A4=_G4;this._N4=_R4;}}registerProcessor("hi-shelf-processor",_X4);function _45(){}_45._55={_65:0,_75:1,_85:2,_95:3,_a5:4,
_b5:5};_45._c5=function(_d5){return 1.0-_d5;};_45._e5=function(_d5){return _d5;};_45._f5=function(_d5){return 0.5*(Math.sin((_d5*2.0*Math.PI)-(Math.PI/2.0))+1.0);};_45._g5=function(_d5){if(_d5<0.5){return 0.0;}return 1.0;};_45._h5=function(_d5){if(_d5<0.5){return 2.0*_d5;}return 2.0-(2.0*_d5);};_45._i5=[_45._c5,_45._e5,_45._f5,_45._g5,_45._h5];_j5._k5=512;_j5._l5=1.0/_j5._k5;function _j5(_m5){this.data=new Float32Array(_j5._k5);for(let __3=0;__3<_j5._k5;++__3){this.data[__3]=_m5(__3*_j5._l5);}}_j5.prototype._n5=function(_d5){
_d5=Math.max(0.0,_d5);_d5=Math.min(_d5,1.0);const _o5=_d5*_j5._k5;const _p5=~~_o5;const _q5=_o5-_p5;let _r5=_p5;let _s5=_r5+1;if(_r5>=_j5._k5){_r5-=_j5._k5;}if(_s5>=_j5._k5){_s5-=_j5._k5;}const _t5=this.data[_r5];const _u5=this.data[_s5];return _t5+(_u5-_t5)*_q5;};;_v5._w5=[];_v5._x5=!1;_v5._y5=0.0;_v5._L4=20.0;function _v5(){this._z5=48000;this.shape=_45._55._85;this.freq=1.0;this._A5=0.0;this._l5=0.0;this._B5=0.0;if(_v5._x5==true){return;}for(let __3=0;__3<_45._55._b5;++__3){_v5._w5[__3]=new _j5(_45._i5[__3]);
}_v5._x5=true;}_v5._C5=function(){return(_v5._x5==!0);};_v5.prototype._D5=function(_E5){this._z5=_E5;this._F5();};;_v5.prototype._G5=function(_Q4){_Q4=Math.max(_v5._y5,_Q4);_Q4=Math.min(_Q4,_v5._L4);this.freq=_Q4;this._F5();};;_v5.prototype._H5=function(_I5){_I5=Math.max(0.0,_I5);_I5=Math.min(_I5,1.0);const _J5=_I5-this._B5;this._B5=_I5;this._A5+=_J5;while(this._A5>=1.0){this._A5-=1.0;}while(this._A5<0.0){this._A5+=1.0;}};;_v5.prototype._K5=function(_L5){_L5=Math.max(0,_L5);_L5=Math.min(_L5,_45._55._b5-1);
this.shape=_L5;};;_v5.prototype._n5=function(){const _M5=_v5._w5[this.shape]._n5(this._A5);this._A5+=this._l5;while(this._A5>=1.0){this._A5-=1.0;}return _M5;};;_v5.prototype._F5=function(){this._l5=this.freq/this._z5;};;class _N5 extends AudioWorkletProcessor{static _O5=5.0;static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"time",automationRate:"a-rate",defaultValue:0.2,minValue:0.0,maxValue:_N5._O5},{name:"feedback",automationRate:"a-rate",
defaultValue:0.5,minValue:0.0,maxValue:1.0},{name:"mix",automationRate:"a-rate",defaultValue:0.35,minValue:0.0,maxValue:1.0}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];const _P5=(_N5._O5*sampleRate)+1;this.buffer=new Array(_S3);this._Q5=new Uint32Array(_S3);for(let _Z3=0;_Z3<_S3;++_Z3)this.buffer[_Z3]=new Float32Array(_P5);}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const time=parameters.time;const feedback=parameters.feedback;
const mix=parameters.mix;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){_44[_54]=_34[_54];const _R5=(time[_54]!==undefined)?time[_54]:time[0];const _S5=this._n5(_Z3,_R5);const _O4=(feedback[_54]!==undefined)?feedback[_54]:feedback[0];const _T5=_34[_54]+(_S5*_O4);this.write(_Z3,_T5);const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0.0){continue;}const _94=(mix[_54]!==undefined)?mix[_54]:mix[0];_44[_54]*=(1-_94);_44[_54]+=(_S5*_94);
}}return this._a4;}_n5(_U5,_V5){const _W5=_V5*sampleRate;let _r5=(this._Q5[_U5]-~~_W5);let _s5=(_r5-1);while(_r5<0)_r5+=this.buffer[_U5].length;while(_s5<0)_s5+=this.buffer[_U5].length;const _X5=_W5-~~_W5;const _t5=this.buffer[_U5][_r5];const _u5=this.buffer[_U5][_s5];return _t5+(_u5-_t5)*_X5;}write(_U5,_z3){++this._Q5[_U5];this._Q5[_U5]%=this.buffer[_U5].length;this.buffer[_U5][this._Q5[_U5]]=_z3;}}registerProcessor("delay-processor",_N5);AudioWorkletProcessor.prototype._R3=function(){this._a4=true;this.port.onmessage=(_Y5)=>{
if(_Y5.data==="kill")this._a4=false;};};;class _Z5 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1}];}constructor(){super();this._R3();}process(_14,_24,parameters){const input=_14[0];const bypass=parameters.bypass;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];for(let _54=0;_54<_34.length;++_54){const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_24[_84][_Z3][_54]=_34[_54];}}return this._a4;
}}class __5 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"gain",automationRate:"a-rate",defaultValue:1,minValue:0}];}constructor(){super();this._R3();}process(_14,_24,parameters){const _k4=_14[0];const _l4=_14[1];const output=_24[0];const gain=parameters.gain;for(let _Z3=0;_Z3<_l4.length;++_Z3){const _34=_l4[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54)_44[_54]=_34[_54];}for(let _Z3=0;_Z3<_k4.length;++_Z3){const _34=_k4[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;
++_54){const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];_44[_54]+=_34[_54]*_P4;}}return this._a4;}}registerProcessor("audio-bus-input",_Z5);registerProcessor("audio-bus-output",__5);class _06 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"gain",automationRate:"a-rate",defaultValue:1.0,minValue:0.0},{name:"factor",automationRate:"a-rate",defaultValue:20,minValue:1,maxValue:100},{name:"resolution",
automationRate:"a-rate",defaultValue:8,minValue:2,maxValue:16},{name:"mix",automationRate:"a-rate",defaultValue:0.8,minValue:0.0,maxValue:1.0}];}static _16=[undefined,undefined,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768];constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._26=new Float32Array(_S3);this._36=new Uint32Array(_S3);}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const gain=parameters.gain;const factor=parameters.factor;
const resolution=parameters.resolution;const mix=parameters.mix;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){_44[_54]=_34[_54];if(this._36[_Z3]===0)this._26[_Z3]=_34[_54];const _O4=(factor[_54]!==undefined)?factor[_54]:factor[0];++this._36[_Z3];this._36[_Z3]%=_O4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0.0){continue;}let _74=this._26[_Z3];const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];_74*=_P4;_74=Math.max(Math.min(_74,
1.0),-1.0);const _46=(resolution[_54]!==undefined)?resolution[_54]:resolution[0];const max=(_74>0.0)?_06._16[_46]-1:_06._16[_46];_74=Math.round(_74*max)/max;const _94=(mix[_54]!==undefined)?mix[_54]:mix[0];_44[_54]*=(1.0-_94);_44[_54]+=(_74*_94);}}return this._a4;}}registerProcessor("bitcrusher-processor",_06);class _56 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"rate",automationRate:"a-rate",defaultValue:5.0,
minValue:0.0,maxValue:20.0},{name:"intensity",automationRate:"a-rate",defaultValue:1.0,minValue:0.0,maxValue:1.0},{name:"offset",automationRate:"a-rate",defaultValue:0.0,minValue:0.0,maxValue:1.0},{name:"shape",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:4}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._66=new Array(_S3).fill(1.0);this._76=new Array(_S3).fill(0.0);this._86=new Array(_S3).fill(_45._55._65);this._96=new Array(_S3);for(let _Z3=0;_Z3<_S3;++_Z3){
this._96[_Z3]=new _v5();this._96[_Z3]._D5(sampleRate);this._96[_Z3]._G5(this._66[_Z3]);this._96[_Z3]._K5(this._86[_Z3]);if(_Z3%2===1){this._96[_Z3]._H5(this._76[_Z3]);}}}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const rate=parameters.rate;const intensity=parameters.intensity;const offset=parameters.offset;const shape=parameters.shape;for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){_44[_54]=_34[_54];
const _46=(rate[_54]!==undefined)?rate[_54]:rate[0];const _a6=(offset[_54]!==undefined)?offset[_54]:offset[0];const _b6=(shape[_54]!==undefined)?shape[_54]:shape[0];this._c6(_Z3,_46,_a6,_b6);const _d6=this._96[_Z3]._n5();const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0.0){continue;}const __3=(intensity[_54]!==undefined)?intensity[_54]:intensity[0];const out=_34[_54]*_d6*__3;_44[_54]*=(1.0-__3);_44[_54]+=out;}}return this._a4;}_c6(_U5,_e6,_I5,_L5){if(_e6!==this._66[_U5]){this._96[_U5]._G5(_e6);
this._66[_U5]=_e6;}if(_I5!==this._76[_U5]){if(_U5%2===1){this._96[_U5]._H5(_I5);}this._76[_U5]=_I5;}if(_L5!==this._86[_U5]){this._96[_U5]._K5(_L5);this._86[_U5]=_L5;}}}registerProcessor("tremolo-processor",_56);class _f6{constructor(_V5=1e-3){this.setTime(_V5);}setTime(_V5){this._g6=Math.exp(-1/(_V5*sampleRate));}process(_h6,_i6){return _h6+this._g6*(_i6-_h6);}}class _j6{constructor(_k6,_l6){this._m6=new _f6(_k6);this._n6=new _f6(_l6);this._o6=_k6;this._p6=_l6;}_q6(_V5){if(_V5===this._o6)return;this._m6.setTime(_V5);
this._o6=_V5;}_r6(_V5){if(_V5===this._p6)return;this._n6.setTime(_V5);this._p6=_V5;}process(_h6,_i6){if(_h6>_i6)return this._m6.process(_h6,_i6);else return this._n6.process(_h6,_i6);}}class _s6 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"ingain",automationRate:"a-rate",defaultValue:1,minValue:0},{name:"threshold",automationRate:"a-rate",defaultValue:0.125,minValue:1e-3,maxValue:1},{name:"ratio",
automationRate:"a-rate",defaultValue:4,minValue:1},{name:"attack",automationRate:"a-rate",defaultValue:0.05,minValue:1e-3,maxValue:1e-1},{name:"release",automationRate:"a-rate",defaultValue:0.25,minValue:1e-2,maxValue:1},{name:"outgain",automationRate:"a-rate",defaultValue:1,minValue:0}];}constructor(_t6){super();this._R3();const _m6=_s6.parameterDescriptors.find(_u6=>_u6.name==="attack");const _n6=_s6.parameterDescriptors.find(_u6=>_u6.name==="release");this._v6=new _j6(_m6.defaultValue,_n6.defaultValue);
this._w6=0;}process(_x6,_y6,_z6){const input=_x6[0];const output=_y6[0];const bypass=_z6.bypass;const ingain=_z6.ingain;const outgain=_z6.outgain;const threshold=_z6.threshold;const ratio=_z6.ratio;const attack=_z6.attack;const release=_z6.release;if(input.length===0)return this._a4;for(let _54=0;_54<input[0].length;++_54){let _A6=input.map(_B6=>_B6[_54]);output.forEach((_B6,_C6)=>{_B6[_54]=_A6[_C6];});const _D6=(ingain[_54]!==undefined)?ingain[_54]:ingain[0];_A6=_A6.map(_E6=>_E6*=_D6);const rect=_A6.map(_E6=>Math.abs(_E6));
const max=Math.max(...rect);const _F6=_G6(max);const _R5=(threshold[_54]!==undefined)?threshold[_54]:threshold[0];const _H6=_G6(_R5);const _I6=Math.max(0,_F6-_H6);const _m6=(attack[_54]!==undefined)?attack[_54]:attack[0];const _n6=(release[_54]!==undefined)?release[_54]:release[0];this._v6._q6(_m6);this._v6._r6(_n6);this._w6=this._v6.process(_I6,this._w6);const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];if(_84>0)continue;const _46=(ratio[_54]!==undefined)?ratio[_54]:ratio[0];const _J6=(this._w6/_46)-this._w6;
const _P4=_K6(_J6);_A6=_A6.map(_E6=>_E6*=_P4);const _L6=(outgain[_54]!==undefined)?outgain[_54]:outgain[0];_A6=_A6.map(_E6=>_E6*=_L6);output.forEach((_B6,_C6)=>{_B6[_54]=_A6[_C6];});}return this._a4;}}function _G6(_M6){return 20*Math.log10(_M6);}function _K6(_M6){return Math.pow(10,_M6/20);}registerProcessor("compressor-processor",_s6);class _N6 extends AudioWorkletProcessor{static get parameterDescriptors(){const _L4=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,
minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",defaultValue:Math.min(500.0,_L4),minValue:10.0,maxValue:_L4},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_Q3){super();this._R3();const _S3=_Q3.outputChannelCount[0];this._q4=0;this._r4=0;this._s4=0;this._t4=0;this._u4=0;this._v4=new Float32Array(_S3);this._w4=new Float32Array(_S3);this._x4=new Float32Array(_S3);this._y4=new Float32Array(_S3);
this._M4=-1;this._A4=-1;this._N4=-1;}process(_14,_24,parameters){const input=_14[0];const output=_24[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _B4=(freq.length===1&&q.length===1&&gain.length===1);if(_B4)this._C4(freq[0],q[0],gain[0]);for(let _Z3=0;_Z3<input.length;++_Z3){const _34=input[_Z3];const _44=output[_Z3];for(let _54=0;_54<_34.length;++_54){if(_B4===!1){const _O4=(freq[_54]!==undefined)?freq[_54]:freq[0];const _D4=(q[_54]!==undefined)?q[_54]:q[0];
const _P4=(gain[_54]!==undefined)?gain[_54]:gain[0];this._C4(_O4,_D4,_P4);}const _E4=this._s4*_34[_54]+this._t4*this._v4[_Z3]+this._u4*this._w4[_Z3]-this._q4*this._x4[_Z3]-this._r4*this._y4[_Z3];this._w4[_Z3]=this._v4[_Z3];this._v4[_Z3]=_34[_54];this._y4[_Z3]=this._x4[_Z3];this._x4[_Z3]=_E4;const _84=(bypass[_54]!==undefined)?bypass[_54]:bypass[0];_44[_54]=(_84>0)?_34[_54]:_E4;}}return this._a4;}_C4(_Q4,_G4,_R4){if(_Q4===this._M4&&_G4===this._A4&&_R4===this._N4)return;const _H4=2*Math.PI*_Q4/sampleRate;
const _I4=Math.cos(_H4);const _S4=Math.sqrt(_R4);const _Y4=_S4+1;const _Z4=_S4-1;const __4=_Y4*_I4;const _05=_Z4*_I4;const _15=_Y4-_05;const _25=_Y4+_05;const alpha=Math.sin(_H4)/(2*_G4);const _35=(2*Math.sqrt(_S4)*alpha);const _J4=_25+_35;const _q4=-2*(_Z4+__4);const _r4=_25-_35;const _s4=_S4*(_15+_35);const _t4=2*_S4*(_Z4-__4);const _u4=_S4*(_15-_35);this._q4=_q4/_J4;this._r4=_r4/_J4;this._s4=_s4/_J4;this._t4=_t4/_J4;this._u4=_u4/_J4;this._M4=_Q4;this._A4=_G4;this._N4=_R4;}}registerProcessor("lo-shelf-processor",
_N6);