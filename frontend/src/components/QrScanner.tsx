import { Html5QrcodeScanner } from "html5-qrcode";
import { useState,useEffect } from "react";


export default function QrScanner() {
  const [scanResult, setScanResult] = useState<string>("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", {
        qrbox : {
          width: 250,
          height: 250
        },
        fps: 5,
        }, /* verbose= */ true     
        );
        scanner.render(onScanSuccess, onScanFailure);
  
        function onScanSuccess(qrCodeMessage: any) {
          // handle on success condition with the decoded message
          scanner.clear();
          setScanResult(qrCodeMessage);
  
        }
        function onScanFailure(error: any) {
          // handle on failure condition with error
          console.log(error);
        }
  }, []);
  

        return (
    <div className="mt-40 w-full">
      <div id="reader"></div>
    {scanResult ? <p className="w-full text-center"> 
      <img src="./images/icon.png" alt="icon" className="m-auto" />
      <p className="text-center text-4xl"> Scanned Succesfully</p></p> : null
    }
    </div>
  );
}