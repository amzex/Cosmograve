function calcu(){
				c = 2.99*Math.pow(10, 8);
				G = 6.67384*Math.pow(10, -11);
				
				t0 = document.getElementById("T0").value;
				h0 = document.getElementById("H0").value; 
				omegam0 = Number(document.getElementById("omegam0").value);
				omegalambda0 = Number(document.getElementById("omegalambda0").value);
				H0parGan = 0;
				
				Or = 0;
				if (document.getElementById("type") == "Matière, Lambda, RFC et Neutrinos") {
					Or=(1.412171e-41)*Math.pow(t0,4)/(3*Math.pow(h0/(3.085678e19),2));
					Or=1.68*Or;
					Or = Or.toExponential();
					} else if (document.getElementById("type") == "Matière, Lambda et RFC") {
					Or=(1.412171e-41)*Math.pow(t0,4)/(3*Math.pow(h0/(3.085678e19),2));
					Or = Or.toExponential();
					} else {
				}
				
				omegalambda0 = omegalambda0.toExponential();
				
				omegak0 = 1-Or-omegam0-omegalambda0;
				
				H0parGan = h0*1.0245974*Math.pow(10, -3);
				
				z1 = document.getElementById("z1").value;
				z2 = document.getElementById("z2").value;
				
				if(z1 == "inf"){
					z1 = 1e13;
				}
				if(z2 == "inf"){
					z2 = 1e7;
				}
				
				integ = Math.sqrt( Math.abs(omegak0)) * simpson(Number(z1), Number(z2), 1e5, fonction_dm, omegam0, Number(omegalambda0), Number(Or));
				
				if (omegak0>0){
					dm=(1/(H0parGan*Math.sqrt( Math.abs(omegak0) ))) * Math.sin(integ);
					}else if (omegak0==0){
					dm=(1/(H0parGan) * simpson(Number(z1), Number(z2), 1e5, fonction_dm, omegam0, Number(omegalambda0), Number(Or)));
					}else{
					dm=(1/(H0parGan*Math.sqrt( Math.abs(omegak0) ))) * Math.sinh(integ);
				}
				
				dda=dm/(1+(z2-z1));
				dl=dm*(1+(z2-z1));
			
				dm = Math.abs(dm);
				
				document.getElementById("dm").innerHTML = dm;
				
			}