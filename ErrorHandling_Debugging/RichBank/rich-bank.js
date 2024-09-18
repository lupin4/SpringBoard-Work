const accounts = [
  { id: 1, owner: "Alice", balance: 500 },
  { id: 2, owner: "Bob", balance: 300 },
];

function getAccountById(id) {
  try {
    // Check for valid account ID
    if (typeof id !== "number" || id <= 0) {
      throw new Error("Invalid account ID. ID must be a positive number.");
    }

    // Search for account by ID
    for (const account of accounts) {
      if (account.id === id) {
        return account;
      }
    }

    // If account not found, throw an error
    throw new Error(`Account with ID ${id} not found.`);
  } catch (error) {
    // Catch and log any errors during account lookup
    console.error(`Error: ${error.message}`);
  } finally {
    // Log message >> account lookup completion
    console.log(`Account lookup completed for ID: ${id}`);
  }
}

function createAccount(newAccountId, newAccountOwner) {
  try {
    // Validate new account ID
    if (typeof newAccountId !== "number" || newAccountId <= 0) {
      throw new Error("Invalid account ID. ID must be a positive number.");
    }

    // Validate new account owner
    if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "") {
      throw new Error(
        "Invalid account owner. Owner name must be a non-empty string."
      );
    }

    // Push new account to the accounts array
    accounts.push({
      id: newAccountId,
      owner: newAccountOwner,
      balance: 0, // Set initial balance to 0 and ensure it's numeric
    });

    // Log successful account creation
    console.log(
      `Account created for ${newAccountOwner} with ID ${newAccountId}.`
    );
  } catch (error) {
    // Catch and log errors during account creation
    console.error(`Error: ${error.message}`);
  } finally {
    // Log a message >> account creation completion
    console.log(`Account creation process completed.`);
  }
}

function depositMoney(accountId, amount) {
  try {
    // Get account by ID
    const account = getAccountById(accountId);

    // If account is not found, throw an error
    if (!account) {
      throw new Error("Account not found.");
    }

    // Validate deposit amount
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error(
        "Invalid deposit amount. It must be a positive finite number."
      );
    }

    // Add the deposit amount to the account balance
    account.balance += amount;

    // Log successful deposit
    console.log(
      `Deposited ${amount} to account ID ${accountId}. New balance: ${account.balance}.`
    );
  } catch (error) {
    // Catch and log errors during deposit
    console.error(`Error: ${error.message}`);
  } finally {
    // Log message >> deposit completion
    console.log(`Deposit operation completed.`);
  }
}

function withdrawMoney(accountId, amount) {
  try {
    // Get account by ID
    const account = getAccountById(accountId);

    // If account is not found, throw an error
    if (!account) {
      throw new Error("Account not found.");
    }

    // Validate withdrawal amount
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error(
        "Invalid withdrawal amount. It must be a positive finite number."
      );
    }

    // Check if account has sufficient balance for withdrawal
    if (account.balance < amount) {
      throw new Error("Insufficient funds for withdrawal.");
    }

    // Deduct the withdrawal amount from the account balance
    account.balance -= amount;

    // Log successful withdrawal
    console.log(
      `Withdrew ${amount} from account ID ${accountId}. New balance: ${account.balance}.`
    );
  } catch (error) {
    // Catch and log errors during withdrawal
    console.error(`Error: ${error.message}`);
  } finally {
    // Log message >> withdrawal completion
    console.log(`Withdrawal operation completed.`);
  }
}

function transferMoney(fromAccountId, toAccountId, amount) {
  try {
    // Get source and target accounts by their IDs
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    // If either account is not found, throw an error
    if (!fromAccount) {
      throw new Error("Source account not found.");
    }

    if (!toAccount) {
      throw new Error("Target account not found.");
    }

    // Validate transfer amount
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error(
        "Invalid transfer amount. It must be a positive finite number."
      );
    }

    // Check if the source account has sufficient balance for the transfer
    if (fromAccount.balance < amount) {
      throw new Error("Insufficient funds for transfer.");
    }

    // Deduct transfer amount from source account >> Add to target account
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    // Log successful transfer
    console.log(
      `Transferred ${amount} from account ID ${fromAccountId} to account ID ${toAccountId}.`
    );
  } catch (error) {
    // Catch and log errors during the transfer
    console.error(`Error: ${error.message}`);
  } finally {
    // Log  message >> transfer completion
    console.log(`Money transfer completed.`);
  }
}

/* Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300");
depositMoney(1, -300);
depositMoney(1, 0);
depositMoney(1, Infinity);
depositMoney(4, 100);

withdrawMoney(1, -100);
withdrawMoney(1, 0);
withdrawMoney(1, 501);

transferMoney(1, 4, 100);
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
