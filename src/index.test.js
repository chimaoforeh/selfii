import {expect} from 'chai';
import {jsdom} from 'jsdom';
import fs from 'fs';


 describe ('Our First Test', () => {

      it('Should pass', ()=> {
      
          expect(true).to.equals(true);
       
      });

 });

 describe ('say hello', () => {
  
        it('Should say hello', ()=> {
            const index=fs.readFileSync('./src/index.html',"utf-8");
            jsdom.env(index,function(err,window){
               const h1=window.document.getElementsByTagName('h1')[0];
               expect(h1.innerHtml).to.equal("Hello World");
               done();
               windo
               w.close;
            });
         
        });
  
   });
  

