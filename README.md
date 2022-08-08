# ncn-db-playground

A simple repository for performance testing purpose.

## Simple Setup

1. Clone the repository

```bash
git clone https://github.com/MiccWan/ncn-db-playground.git
cd ncn-db-playground
```

2. Prepare your `.env` file

Run command below to create a .env file

```
cp .env.defaults .env
```

Then modify `DATABASE_URL` field to your postgresql server URL.

3. Install required dependencies

```bash
yarn
```

4. Run the test

```
node ./src/main.test.js
```