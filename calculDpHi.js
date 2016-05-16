function calculDpHi(){		
				c = 2.99*Math.pow(10, 8);
				G = 6.67384*Math.pow(10, -11);
				
				t0 = document.getElementById("T0").value;
				h0 = document.getElementById("H0").value; 
				omegam0 = Number(document.getElementById("omegam0").value);
				omegalambda0 = Number(document.getElementById("omegalambda0").value);
				H0parGan = 0;
				
				D = document.getElementById("diametre").value;
	
				
				omegalambda0 = omegalambda0.toExponential();
				
				omegak0 = 1-Or-omegam0-omegalambda0;
				
				H0parGan = h0*1.0245974*Math.pow(10, -3);
				

				
				integ = Math.sqrt( Math.abs(omegak0)) * simpson(Number(z1), Number(z2), 1e5, fonction_dm, omegam0, Number(omegalambda0), Number(Or));
				
				if (omegak0>0){
					dm=(1/(H0parGan*Math.sqrt( Math.abs(omegak0) ))) * Math.sin(integ);
					}else if (omegak0==0){
					dm=(1/(H0parGan) * simpson(Number(z1), Number(z2), 1e5, fonction_dm, omegam0, Number(omegalambda0), Number(Or)));
					}else{
					dm=(1/(H0parGan*Math.sqrt( Math.abs(omegak0) ))) * Math.sinh(integ);
				}
				
				dd=dm/(1+z2);
				pHi=D/dd;
				document.getElementById("pHi").innerHTML = pHi;
			}
		