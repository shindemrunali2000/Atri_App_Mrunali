import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useImage4Cb() {
	const onClick = useCallback(callbackFactory("Image4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}