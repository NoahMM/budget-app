import { useState } from "react";
import { z } from "zod";

export const ACCOUNT_TYPE_OPTIONS = {
  CASH: "Cash",
  INVEST: "Investment",
  LOAN: "Loan",
  PROPERTY: "Property",
  BANKING: "Banking",
};

export const ACCOUNT_TYPE = z.nativeEnum(ACCOUNT_TYPE_OPTIONS);

export const ACCOUNT = z.object({
  name: z.string().min(1),
  type: ACCOUNT_TYPE,
  interest: z.number(),
  value: z.number(),
});

export default function Accounts() {
  const [accounts, setAccounts] = useState();
  const [account, setAccount] = useState();
  return (
    <div>
      <input></input>
    </div>
  );
}
