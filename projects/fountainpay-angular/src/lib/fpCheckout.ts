import { ScriptStatusInterface } from './types';


const loadedScripts: {
  src?: string;
} = {};


export class FPCheckout {
  public src = 'https://libraries.fountainpay.ng/v.1.0/inline.js';
  public status: ScriptStatusInterface={
    loaded: true,
    error: false,
  }
  constructor() {
    this.loadAppScript();
    this.status.loaded=false;
    this.status.error=false;
  }

  public loadAppScript():any {
    if (loadedScripts.hasOwnProperty(this.src)) {
      this.status.loaded=false;
      this.status.error=false;
    } else {
      loadedScripts.src = this.src;

      const script = document.createElement('script');
      script.src = this.src;
      script.id = "fpCheckout"
      script.async = true;

      const onScriptLoad = (): void => {
        this.status.loaded=true;
        this.status.error=false;
      };

      const onScriptError = (): void => {
        delete loadedScripts.src;

        this.status.loaded=true;
        this.status.error=true;
      };
      
      
      script.addEventListener('load', onScriptLoad);
      script.addEventListener('complete', onScriptLoad);
      script.addEventListener('error', onScriptError);

      document.body.appendChild(script);

      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }
}