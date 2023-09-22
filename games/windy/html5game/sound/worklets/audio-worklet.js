﻿class _R1{constructor(_S1){this._T1=0;this._U1=0;this.feedback=0;this._V1=0;this.buffer=new Float32Array(_S1);this._W1=0;}process(_X1){const out=this.buffer[this._W1];this._V1=(this._V1*this._T1)+(out*this._U1);this.buffer[this._W1]=_X1+(this._V1*this.feedback);++this._W1;this._W1%=this.buffer.length;return out;}_Y1(_Z1){this.feedback=Math.min(Math.max(0,_Z1),1);}__1(_02){this._T1=Math.min(Math.max(0,_02),1);this._U1=1-this._T1;}}class _12{constructor(_S1){this.feedback=0;this.buffer=new Float32Array(_S1);
this._W1=0;}process(_X1){const out=this.buffer[this._W1];this.buffer[this._W1]=_X1+(out*this.feedback);++this._W1;this._W1%=this.buffer.length;return(out-_X1);}_Y1(_Z1){this.feedback=Math.min(Math.max(0,_Z1),1);}}class _22 extends AudioWorkletProcessor{static _32=8;static _42=4;static _52=0.015;static _62=0.4;static _72=0.28;static _82=0.7;static _92=[1116,1188,1277,1356,1422,1491,1557,1617];static _a2=[1139,1211,1300,1379,1445,1514,1580,1640];static _b2=[556,441,341,225];static _c2=[579,464,364,248];static get parameterDescriptors(){
return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"size",automationRate:"a-rate",defaultValue:0.7,minValue:0.0,maxValue:1.0},{name:"damp",automationRate:"a-rate",defaultValue:0.1,minValue:0.0,maxValue:1.0},{name:"mix",automationRate:"a-rate",defaultValue:0.35,minValue:0.0,maxValue:1.0}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._g2=-1;this._h2=-1;this._i2=new Array(_f2);this._j2=new Array(_f2);const _k2=[_22._92,_22._a2];const _l2=[_22._b2,
_22._c2];for(let _m2=0;_m2<_f2;++_m2){this._i2[_m2]=new Array(_22._32);this._j2[_m2]=new Array(_22._42);for(let _n2=0;_n2<_22._32;++_n2)this._i2[_m2][_n2]=new _R1(_k2[_m2%_k2.length][_n2]);for(let _n2=0;_n2<_22._42;++_n2)this._j2[_m2][_n2]=new _12(_l2[_m2%_l2.length][_n2]);}this._o2(0.5);this.__1(0.5);for(let _m2=0;_m2<_f2;++_m2)for(let _n2=0;_n2<_22._42;++_n2)this._j2[_m2][_n2]._Y1(0.5);}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const size=parameters.size;
const damp=parameters.damp;const mix=parameters.mix;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){const _t2=(size[_t2]!==undefined)?size[_t2]:size[0];const _u2=(damp[_t2]!==undefined)?damp[_t2]:damp[0];this._o2(_t2);this.__1(_u2);_s2[_t2]=_r2[_t2];let out=0;const _v2=_r2[_t2]*_22._52;for(let _n2=0;_n2<_22._32;++_n2)out+=this._i2[_m2][_n2].process(_v2);for(let _n2=0;_n2<_22._42;++_n2)out=this._j2[_m2][_n2].process(out);const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];
if(_w2>0.0){continue;}const _x2=(mix[_t2]!==undefined)?mix[_t2]:mix[0];_s2[_t2]*=(1-_x2);_s2[_t2]+=(out*_x2);}}return this._y2;}_o2(_S1){if(_S1===this._g2)return;const size=(_S1*_22._72)+_22._82;for(let _m2=0;_m2<this._i2.length;++_m2)for(let _n2=0;_n2<_22._32;++_n2)this._i2[_m2][_n2]._Y1(size);this._g2=_S1;}__1(_02){if(_02===this._h2)return;const damp=_02*_22._62;for(let _m2=0;_m2<this._i2.length;++_m2)for(let _n2=0;_n2<_22._32;++_n2)this._i2[_m2][_n2].__1(damp);this._h2=_02;}}registerProcessor("reverb1-processor",
_22);class _z2 extends AudioWorkletProcessor{static get parameterDescriptors(){return [];}constructor(){super();this._e2();}process(_A2,_B2,_C2){const input=_A2[0];const _D2=_B2[0];const _E2=_B2[1];for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _F2=_D2[_m2];const _G2=_E2[_m2];for(let _t2=0;_t2<_r2.length;++_t2){_F2[_t2]=_r2[_t2];_G2[_t2]=_r2[_t2];}}return this._y2;}}class _H2 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,
minValue:0,maxValue:1}];}constructor(){super();this._e2();}process(_A2,_B2,_C2){const _I2=_A2[0];const _J2=_A2[1];const output=_B2[0];const bypass=_C2.bypass;for(let _m2=0;_m2<_J2.length;++_m2){const _K2=_I2[_m2];const _L2=_J2[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_K2.length;++_t2){const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0){_s2[_t2]=_L2[_t2];}else {_s2[_t2]=_K2[_t2];}}}return this._y2;}}registerProcessor("eq-input",_z2);registerProcessor("eq-output",_H2);class _M2 extends AudioWorkletProcessor{
static get parameterDescriptors(){const _N2=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"cutoff",automationRate:"a-rate",defaultValue:Math.min(500.0,_N2),minValue:10.0,maxValue:_N2},{name:"q",automationRate:"a-rate",defaultValue:1.5,minValue:1.0,maxValue:100.0}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._O2=0;this._P2=0;this._Q2=0;this._R2=0;this._S2=0;this._T2=new Float32Array(_f2);this._U2=new Float32Array(_f2);
this._V2=new Float32Array(_f2);this._W2=new Float32Array(_f2);this._X2=-1;this._Y2=-1;}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const cutoff=parameters.cutoff;const q=parameters.q;const _Z2=(cutoff.length===1&&q.length===1);if(_Z2)this.__2(cutoff[0],q[0]);for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){if(_Z2===!1){const _m2=(cutoff[_t2]!==undefined)?cutoff[_t2]:cutoff[0];const _03=(q[_t2]!==undefined)?q[_t2]:q[0];
this.__2(_m2,_03);}const _13=this._Q2*_r2[_t2]+this._R2*this._T2[_m2]+this._S2*this._U2[_m2]-this._O2*this._V2[_m2]-this._P2*this._W2[_m2];this._U2[_m2]=this._T2[_m2];this._T2[_m2]=_r2[_t2];this._W2[_m2]=this._V2[_m2];this._V2[_m2]=_13;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_s2[_t2]=(_w2>0)?_r2[_t2]:_13;}}return this._y2;}__2(_23,_33){if(_23===this._X2&&_33===this._Y2)return;const _43=2*Math.PI*_23/sampleRate;const alpha=Math.sin(_43)/(2*_33);const _53=Math.cos(_43);const _63=1+alpha;
const _O2=-2*_53;const _P2=1-alpha;const _Q2=(1-_53)/2;const _R2=1-_53;const _S2=(1-_53)/2;this._O2=_O2/_63;this._P2=_P2/_63;this._Q2=_Q2/_63;this._R2=_R2/_63;this._S2=_S2/_63;this._X2=_23;this._Y2=_33;}}registerProcessor("lpf2-processor",_M2);class _73 extends AudioWorkletProcessor{static get parameterDescriptors(){const _83=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",defaultValue:Math.min(1500.0,
_83),minValue:10.0,maxValue:_83},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._O2=0;this._P2=0;this._Q2=0;this._R2=0;this._S2=0;this._T2=new Float32Array(_f2);this._U2=new Float32Array(_f2);this._V2=new Float32Array(_f2);this._W2=new Float32Array(_f2);this._93=-1;this._Y2=-1;this._a3=-1;}process(_p2,_q2,parameters){const input=_p2[0];
const output=_q2[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _Z2=(freq.length===1&&q.length===1&&gain.length===1);if(_Z2)this.__2(freq[0],q[0],gain[0]);for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){if(_Z2===!1){const _b3=(freq[_t2]!==undefined)?freq[_t2]:freq[0];const _03=(q[_t2]!==undefined)?q[_t2]:q[0];const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];this.__2(_b3,
_03,_c3);}const _13=this._Q2*_r2[_t2]+this._R2*this._T2[_m2]+this._S2*this._U2[_m2]-this._O2*this._V2[_m2]-this._P2*this._W2[_m2];this._U2[_m2]=this._T2[_m2];this._T2[_m2]=_r2[_t2];this._W2[_m2]=this._V2[_m2];this._V2[_m2]=_13;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_s2[_t2]=(_w2>0)?_r2[_t2]:_13;}}return this._y2;}__2(_d3,_33,_e3){if(_d3===this._93&&_33===this._Y2&&_e3===this._a3)return;const _43=2*Math.PI*_d3/sampleRate;const _53=Math.cos(_43);const _f3=Math.sqrt(_e3);const alpha=Math.sin(_43)/(2*_33);
const _g3=alpha/_f3;const _h3=alpha*_f3;const _63=1+_g3;const _O2=-2*_53;const _P2=1-_g3;const _Q2=1+_h3;const _R2=_O2;const _S2=1-_h3;this._O2=_O2/_63;this._P2=_P2/_63;this._Q2=_Q2/_63;this._R2=_R2/_63;this._S2=_S2/_63;this._93=_d3;this._Y2=_33;this._a3=_e3;}}registerProcessor("peak-eq-processor",_73);class _i3 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"gain",automationRate:"a-rate",defaultValue:0.5,
minValue:0.0}];}constructor(){super();this._e2();}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const gain=parameters.gain;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){_s2[_t2]=_r2[_t2];const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0.0){continue;}const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];_s2[_t2]*=_c3;}}return this._y2;}}registerProcessor("gain-processor",
_i3);class _j3 extends AudioWorkletProcessor{static get parameterDescriptors(){const _N2=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"cutoff",automationRate:"a-rate",defaultValue:Math.min(1500.0,_N2),minValue:10.0,maxValue:_N2},{name:"q",automationRate:"a-rate",defaultValue:1.5,minValue:1.0,maxValue:100.0}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._O2=0;this._P2=0;this._Q2=0;this._R2=0;this._S2=0;
this._T2=new Float32Array(_f2);this._U2=new Float32Array(_f2);this._V2=new Float32Array(_f2);this._W2=new Float32Array(_f2);this._X2=-1;this._Y2=-1;}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const cutoff=parameters.cutoff;const q=parameters.q;const _Z2=(cutoff.length===1&&q.length===1);if(_Z2)this.__2(cutoff[0],q[0]);for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){if(_Z2===!1){const _m2=(cutoff[_t2]!==undefined)?cutoff[_t2]:cutoff[0];
const _03=(q[_t2]!==undefined)?q[_t2]:q[0];this.__2(_m2,_03);}const _13=this._Q2*_r2[_t2]+this._R2*this._T2[_m2]+this._S2*this._U2[_m2]-this._O2*this._V2[_m2]-this._P2*this._W2[_m2];this._U2[_m2]=this._T2[_m2];this._T2[_m2]=_r2[_t2];this._W2[_m2]=this._V2[_m2];this._V2[_m2]=_13;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_s2[_t2]=(_w2>0)?_r2[_t2]:_13;}}return this._y2;}__2(_23,_33){if(_23===this._X2&&_33===this._Y2)return;const _43=2*Math.PI*_23/sampleRate;const alpha=Math.sin(_43)/(2*_33);
const _53=Math.cos(_43);const _63=1+alpha;const _O2=-2*_53;const _P2=1-alpha;const _Q2=(1+_53)/2;const _R2=-1-_53;const _S2=(1+_53)/2;this._O2=_O2/_63;this._P2=_P2/_63;this._Q2=_Q2/_63;this._R2=_R2/_63;this._S2=_S2/_63;this._X2=_23;this._Y2=_33;}}registerProcessor("hpf2-processor",_j3);class _k3 extends AudioWorkletProcessor{static get parameterDescriptors(){const _83=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",
defaultValue:Math.min(5000.0,_83),minValue:10.0,maxValue:_83},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._O2=0;this._P2=0;this._Q2=0;this._R2=0;this._S2=0;this._T2=new Float32Array(_f2);this._U2=new Float32Array(_f2);this._V2=new Float32Array(_f2);this._W2=new Float32Array(_f2);this._93=-1;this._Y2=-1;this._a3=-1;}process(_p2,
_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _Z2=(freq.length===1&&q.length===1&&gain.length===1);if(_Z2)this.__2(freq[0],q[0],gain[0]);for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){if(_Z2===!1){const _b3=(freq[_t2]!==undefined)?freq[_t2]:freq[0];const _03=(q[_t2]!==undefined)?q[_t2]:q[0];const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];
this.__2(_b3,_03,_c3);}const _13=this._Q2*_r2[_t2]+this._R2*this._T2[_m2]+this._S2*this._U2[_m2]-this._O2*this._V2[_m2]-this._P2*this._W2[_m2];this._U2[_m2]=this._T2[_m2];this._T2[_m2]=_r2[_t2];this._W2[_m2]=this._V2[_m2];this._V2[_m2]=_13;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_s2[_t2]=(_w2>0)?_r2[_t2]:_13;}}return this._y2;}__2(_d3,_33,_e3){if(_d3===this._93&&_33===this._Y2&&_e3===this._a3)return;const _43=2*Math.PI*_d3/sampleRate;const _53=Math.cos(_43);const _f3=Math.sqrt(_e3);const _l3=_f3+1;
const _m3=_f3-1;const _n3=_l3*_53;const _o3=_m3*_53;const _p3=_l3-_o3;const _q3=_l3+_o3;const alpha=Math.sin(_43)/(2*_33);const _r3=(2*Math.sqrt(_f3)*alpha);const _63=_p3+_r3;const _O2=2*(_m3-_n3);const _P2=_p3-_r3;const _Q2=_f3*(_q3+_r3);const _R2=-2*_f3*(_m3+_n3);const _S2=_f3*(_q3-_r3);this._O2=_O2/_63;this._P2=_P2/_63;this._Q2=_Q2/_63;this._R2=_R2/_63;this._S2=_S2/_63;this._93=_d3;this._Y2=_33;this._a3=_e3;}}registerProcessor("hi-shelf-processor",_k3);function _s3(){}_s3._t3={_u3:0,_v3:1,_w3:2,_x3:3,_y3:4,
_z3:5};_s3._A3=function(_B3){return 1.0-_B3;};_s3._C3=function(_B3){return _B3;};_s3._D3=function(_B3){return 0.5*(Math.sin((_B3*2.0*Math.PI)-(Math.PI/2.0))+1.0);};_s3._E3=function(_B3){if(_B3<0.5){return 0.0;}return 1.0;};_s3._F3=function(_B3){if(_B3<0.5){return 2.0*_B3;}return 2.0-(2.0*_B3);};_s3._G3=[_s3._A3,_s3._C3,_s3._D3,_s3._E3,_s3._F3];_H3._I3=512;_H3._J3=1.0/_H3._I3;function _H3(_K3){this.data=new Float32Array(_H3._I3);for(let _n2=0;_n2<_H3._I3;++_n2){this.data[_n2]=_K3(_n2*_H3._J3);}}_H3.prototype._L3=function(_B3){
_B3=Math.max(0.0,_B3);_B3=Math.min(_B3,1.0);const _M3=_B3*_H3._I3;const _N3=~~_M3;const _O3=_M3-_N3;let _P3=_N3;let _Q3=_P3+1;if(_P3>=_H3._I3){_P3-=_H3._I3;}if(_Q3>=_H3._I3){_Q3-=_H3._I3;}const _R3=this.data[_P3];const _S3=this.data[_Q3];return _R3+(_S3-_R3)*_O3;};;_T3._U3=[];_T3._V3=!1;_T3._W3=0.0;_T3._83=20.0;function _T3(){this._X3=48000;this.shape=_s3._t3._w3;this.freq=1.0;this._Y3=0.0;this._J3=0.0;this._Z3=0.0;if(_T3._V3==true){return;}for(let _n2=0;_n2<_s3._t3._z3;++_n2){_T3._U3[_n2]=new _H3(_s3._G3[_n2]);
}_T3._V3=true;}_T3.__3=function(){return(_T3._V3==!0);};_T3.prototype._04=function(_14){this._X3=_14;this._24();};;_T3.prototype._34=function(_d3){_d3=Math.max(_T3._W3,_d3);_d3=Math.min(_d3,_T3._83);this.freq=_d3;this._24();};;_T3.prototype._44=function(_54){_54=Math.max(0.0,_54);_54=Math.min(_54,1.0);const _64=_54-this._Z3;this._Z3=_54;this._Y3+=_64;while(this._Y3>=1.0){this._Y3-=1.0;}while(this._Y3<0.0){this._Y3+=1.0;}};;_T3.prototype._74=function(_84){_84=Math.max(0,_84);_84=Math.min(_84,_s3._t3._z3-1);
this.shape=_84;};;_T3.prototype._L3=function(){const _94=_T3._U3[this.shape]._L3(this._Y3);this._Y3+=this._J3;while(this._Y3>=1.0){this._Y3-=1.0;}return _94;};;_T3.prototype._24=function(){this._J3=this.freq/this._X3;};;class _a4 extends AudioWorkletProcessor{static _b4=5.0;static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"time",automationRate:"a-rate",defaultValue:0.2,minValue:0.0,maxValue:_a4._b4},{name:"feedback",automationRate:"a-rate",
defaultValue:0.5,minValue:0.0,maxValue:1.0},{name:"mix",automationRate:"a-rate",defaultValue:0.35,minValue:0.0,maxValue:1.0}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];const _c4=(_a4._b4*sampleRate)+1;this.buffer=new Array(_f2);this._d4=new Uint32Array(_f2);for(let _m2=0;_m2<_f2;++_m2)this.buffer[_m2]=new Float32Array(_c4);}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const time=parameters.time;const feedback=parameters.feedback;
const mix=parameters.mix;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){_s2[_t2]=_r2[_t2];const _e4=(time[_t2]!==undefined)?time[_t2]:time[0];const _f4=this._L3(_m2,_e4);const _b3=(feedback[_t2]!==undefined)?feedback[_t2]:feedback[0];const _g4=_r2[_t2]+(_f4*_b3);this.write(_m2,_g4);const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0.0){continue;}const _x2=(mix[_t2]!==undefined)?mix[_t2]:mix[0];_s2[_t2]*=(1-_x2);_s2[_t2]+=(_f4*_x2);
}}return this._y2;}_L3(_h4,_i4){const _j4=_i4*sampleRate;let _P3=(this._d4[_h4]-~~_j4);let _Q3=(_P3-1);while(_P3<0)_P3+=this.buffer[_h4].length;while(_Q3<0)_Q3+=this.buffer[_h4].length;const _k4=_j4-~~_j4;const _R3=this.buffer[_h4][_P3];const _S3=this.buffer[_h4][_Q3];return _R3+(_S3-_R3)*_k4;}write(_h4,_X1){++this._d4[_h4];this._d4[_h4]%=this.buffer[_h4].length;this.buffer[_h4][this._d4[_h4]]=_X1;}}registerProcessor("delay-processor",_a4);AudioWorkletProcessor.prototype._e2=function(){this._y2=true;this.port.onmessage=(_l4)=>{
if(_l4.data==="kill")this._y2=false;};};;class _m4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1}];}constructor(){super();this._e2();}process(_p2,_q2,parameters){const input=_p2[0];const bypass=parameters.bypass;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];for(let _t2=0;_t2<_r2.length;++_t2){const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_q2[_w2][_m2][_t2]=_r2[_t2];}}return this._y2;
}}class _n4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"gain",automationRate:"a-rate",defaultValue:1,minValue:0}];}constructor(){super();this._e2();}process(_p2,_q2,parameters){const _I2=_p2[0];const _J2=_p2[1];const output=_q2[0];const gain=parameters.gain;for(let _m2=0;_m2<_J2.length;++_m2){const _r2=_J2[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2)_s2[_t2]=_r2[_t2];}for(let _m2=0;_m2<_I2.length;++_m2){const _r2=_I2[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;
++_t2){const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];_s2[_t2]+=_r2[_t2]*_c3;}}return this._y2;}}registerProcessor("audio-bus-input",_m4);registerProcessor("audio-bus-output",_n4);class _o4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"gain",automationRate:"a-rate",defaultValue:1.0,minValue:0.0},{name:"factor",automationRate:"a-rate",defaultValue:20,minValue:1,maxValue:100},{name:"resolution",
automationRate:"a-rate",defaultValue:8,minValue:2,maxValue:16},{name:"mix",automationRate:"a-rate",defaultValue:0.8,minValue:0.0,maxValue:1.0}];}static _p4=[undefined,undefined,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768];constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._q4=new Float32Array(_f2);this._r4=new Uint32Array(_f2);}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const gain=parameters.gain;const factor=parameters.factor;
const resolution=parameters.resolution;const mix=parameters.mix;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){_s2[_t2]=_r2[_t2];if(this._r4[_m2]===0)this._q4[_m2]=_r2[_t2];const _b3=(factor[_t2]!==undefined)?factor[_t2]:factor[0];++this._r4[_m2];this._r4[_m2]%=_b3;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0.0){continue;}let _v2=this._q4[_m2];const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];_v2*=_c3;_v2=Math.max(Math.min(_v2,
1.0),-1.0);const _s4=(resolution[_t2]!==undefined)?resolution[_t2]:resolution[0];const max=(_v2>0.0)?_o4._p4[_s4]-1:_o4._p4[_s4];_v2=Math.round(_v2*max)/max;const _x2=(mix[_t2]!==undefined)?mix[_t2]:mix[0];_s2[_t2]*=(1.0-_x2);_s2[_t2]+=(_v2*_x2);}}return this._y2;}}registerProcessor("bitcrusher-processor",_o4);class _t4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"rate",automationRate:"a-rate",defaultValue:5.0,
minValue:0.0,maxValue:20.0},{name:"intensity",automationRate:"a-rate",defaultValue:1.0,minValue:0.0,maxValue:1.0},{name:"offset",automationRate:"a-rate",defaultValue:0.0,minValue:0.0,maxValue:1.0},{name:"shape",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:4}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._u4=new Array(_f2).fill(1.0);this._v4=new Array(_f2).fill(0.0);this._w4=new Array(_f2).fill(_s3._t3._u3);this._x4=new Array(_f2);for(let _m2=0;_m2<_f2;++_m2){
this._x4[_m2]=new _T3();this._x4[_m2]._04(sampleRate);this._x4[_m2]._34(this._u4[_m2]);this._x4[_m2]._74(this._w4[_m2]);if(_m2%2===1){this._x4[_m2]._44(this._v4[_m2]);}}}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const rate=parameters.rate;const intensity=parameters.intensity;const offset=parameters.offset;const shape=parameters.shape;for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){_s2[_t2]=_r2[_t2];
const _s4=(rate[_t2]!==undefined)?rate[_t2]:rate[0];const _y4=(offset[_t2]!==undefined)?offset[_t2]:offset[0];const _z4=(shape[_t2]!==undefined)?shape[_t2]:shape[0];this._A4(_m2,_s4,_y4,_z4);const _B4=this._x4[_m2]._L3();const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0.0){continue;}const _n2=(intensity[_t2]!==undefined)?intensity[_t2]:intensity[0];const out=_r2[_t2]*_B4*_n2;_s2[_t2]*=(1.0-_n2);_s2[_t2]+=out;}}return this._y2;}_A4(_h4,_C4,_54,_84){if(_C4!==this._u4[_h4]){this._x4[_h4]._34(_C4);
this._u4[_h4]=_C4;}if(_54!==this._v4[_h4]){if(_h4%2===1){this._x4[_h4]._44(_54);}this._v4[_h4]=_54;}if(_84!==this._w4[_h4]){this._x4[_h4]._74(_84);this._w4[_h4]=_84;}}}registerProcessor("tremolo-processor",_t4);class _D4{constructor(_i4=1e-3){this.setTime(_i4);}setTime(_i4){this._E4=Math.exp(-1/(_i4*sampleRate));}process(_F4,_G4){return _F4+this._E4*(_G4-_F4);}}class _H4{constructor(_I4,_J4){this._K4=new _D4(_I4);this._L4=new _D4(_J4);this._M4=_I4;this._N4=_J4;}_O4(_i4){if(_i4===this._M4)return;this._K4.setTime(_i4);
this._M4=_i4;}_P4(_i4){if(_i4===this._N4)return;this._L4.setTime(_i4);this._N4=_i4;}process(_F4,_G4){if(_F4>_G4)return this._K4.process(_F4,_G4);else return this._L4.process(_F4,_G4);}}class _Q4 extends AudioWorkletProcessor{static get parameterDescriptors(){return [{name:"bypass",automationRate:"a-rate",defaultValue:0,minValue:0,maxValue:1},{name:"ingain",automationRate:"a-rate",defaultValue:1,minValue:0},{name:"threshold",automationRate:"a-rate",defaultValue:0.125,minValue:1e-3,maxValue:1},{name:"ratio",
automationRate:"a-rate",defaultValue:4,minValue:1},{name:"attack",automationRate:"a-rate",defaultValue:0.05,minValue:1e-3,maxValue:1e-1},{name:"release",automationRate:"a-rate",defaultValue:0.25,minValue:1e-2,maxValue:1},{name:"outgain",automationRate:"a-rate",defaultValue:1,minValue:0}];}constructor(_R4){super();this._e2();const _K4=_Q4.parameterDescriptors.find(_S4=>_S4.name==="attack");const _L4=_Q4.parameterDescriptors.find(_S4=>_S4.name==="release");this._T4=new _H4(_K4.defaultValue,_L4.defaultValue);
this._U4=0;}process(_V4,_W4,_X4){const input=_V4[0];const output=_W4[0];const bypass=_X4.bypass;const ingain=_X4.ingain;const outgain=_X4.outgain;const threshold=_X4.threshold;const ratio=_X4.ratio;const attack=_X4.attack;const release=_X4.release;if(input.length===0)return this._y2;for(let _t2=0;_t2<input[0].length;++_t2){let _Y4=input.map(_Z4=>_Z4[_t2]);output.forEach((_Z4,__4)=>{_Z4[_t2]=_Y4[__4];});const _05=(ingain[_t2]!==undefined)?ingain[_t2]:ingain[0];_Y4=_Y4.map(_15=>_15*=_05);const rect=_Y4.map(_15=>Math.abs(_15));
const max=Math.max(...rect);const _25=_35(max);const _e4=(threshold[_t2]!==undefined)?threshold[_t2]:threshold[0];const _45=_35(_e4);const _55=Math.max(0,_25-_45);const _K4=(attack[_t2]!==undefined)?attack[_t2]:attack[0];const _L4=(release[_t2]!==undefined)?release[_t2]:release[0];this._T4._O4(_K4);this._T4._P4(_L4);this._U4=this._T4.process(_55,this._U4);const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];if(_w2>0)continue;const _s4=(ratio[_t2]!==undefined)?ratio[_t2]:ratio[0];const _65=(this._U4/_s4)-this._U4;
const _c3=_75(_65);_Y4=_Y4.map(_15=>_15*=_c3);const _85=(outgain[_t2]!==undefined)?outgain[_t2]:outgain[0];_Y4=_Y4.map(_15=>_15*=_85);output.forEach((_Z4,__4)=>{_Z4[_t2]=_Y4[__4];});}return this._y2;}}function _35(_95){return 20*Math.log10(_95);}function _75(_95){return Math.pow(10,_95/20);}registerProcessor("compressor-processor",_Q4);class _a5 extends AudioWorkletProcessor{static get parameterDescriptors(){const _83=Math.min(sampleRate/2.0,20000.0);return [{name:"bypass",automationRate:"a-rate",defaultValue:0,
minValue:0,maxValue:1},{name:"freq",automationRate:"a-rate",defaultValue:Math.min(500.0,_83),minValue:10.0,maxValue:_83},{name:"q",automationRate:"a-rate",defaultValue:1.0,minValue:1.0,maxValue:100.0},{name:"gain",automationRate:"a-rate",defaultValue:1e-2,minValue:1e-6}];}constructor(_d2){super();this._e2();const _f2=_d2.outputChannelCount[0];this._O2=0;this._P2=0;this._Q2=0;this._R2=0;this._S2=0;this._T2=new Float32Array(_f2);this._U2=new Float32Array(_f2);this._V2=new Float32Array(_f2);this._W2=new Float32Array(_f2);
this._93=-1;this._Y2=-1;this._a3=-1;}process(_p2,_q2,parameters){const input=_p2[0];const output=_q2[0];const bypass=parameters.bypass;const freq=parameters.freq;const q=parameters.q;const gain=parameters.gain;const _Z2=(freq.length===1&&q.length===1&&gain.length===1);if(_Z2)this.__2(freq[0],q[0],gain[0]);for(let _m2=0;_m2<input.length;++_m2){const _r2=input[_m2];const _s2=output[_m2];for(let _t2=0;_t2<_r2.length;++_t2){if(_Z2===!1){const _b3=(freq[_t2]!==undefined)?freq[_t2]:freq[0];const _03=(q[_t2]!==undefined)?q[_t2]:q[0];
const _c3=(gain[_t2]!==undefined)?gain[_t2]:gain[0];this.__2(_b3,_03,_c3);}const _13=this._Q2*_r2[_t2]+this._R2*this._T2[_m2]+this._S2*this._U2[_m2]-this._O2*this._V2[_m2]-this._P2*this._W2[_m2];this._U2[_m2]=this._T2[_m2];this._T2[_m2]=_r2[_t2];this._W2[_m2]=this._V2[_m2];this._V2[_m2]=_13;const _w2=(bypass[_t2]!==undefined)?bypass[_t2]:bypass[0];_s2[_t2]=(_w2>0)?_r2[_t2]:_13;}}return this._y2;}__2(_d3,_33,_e3){if(_d3===this._93&&_33===this._Y2&&_e3===this._a3)return;const _43=2*Math.PI*_d3/sampleRate;
const _53=Math.cos(_43);const _f3=Math.sqrt(_e3);const _l3=_f3+1;const _m3=_f3-1;const _n3=_l3*_53;const _o3=_m3*_53;const _p3=_l3-_o3;const _q3=_l3+_o3;const alpha=Math.sin(_43)/(2*_33);const _r3=(2*Math.sqrt(_f3)*alpha);const _63=_q3+_r3;const _O2=-2*(_m3+_n3);const _P2=_q3-_r3;const _Q2=_f3*(_p3+_r3);const _R2=2*_f3*(_m3-_n3);const _S2=_f3*(_p3-_r3);this._O2=_O2/_63;this._P2=_P2/_63;this._Q2=_Q2/_63;this._R2=_R2/_63;this._S2=_S2/_63;this._93=_d3;this._Y2=_33;this._a3=_e3;}}registerProcessor("lo-shelf-processor",
_a5);