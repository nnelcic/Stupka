import axios from "axios";
import { DecodedToken, verifyAuthToken } from "./VerifyAuthToken";
import { useState } from "react";

export function getCurrentUserId<Number>() {
    const tokenInfo = verifyAuthToken();
    const decodedToken = tokenInfo as DecodedToken;
    const userId = Number(decodedToken.id)
    return userId;
}

