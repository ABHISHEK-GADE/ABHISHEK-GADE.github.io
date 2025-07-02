# All-in-One eCommerce System (Prototype)

This repository provides an experimental foundation for building a modular, self-hosted eCommerce platform. The goal is to create a system that can eventually rival hosted solutions like WooCommerce and Shopify while remaining open-source and developer-friendly.

## Getting Started

The current prototype includes a simple Node.js server with an in-memory SQLite database. It exposes basic REST endpoints for managing products and orders.

### Requirements
- Node.js >= 14
- npm

### Installation
```bash
cd server
npm install
node index.js
```
This starts the server on port `3000`.

### API Endpoints
- `GET /products` – list all products
- `POST /products` – create a new product (`name`, `description`, `price`)
- `POST /orders` – place an order (`product_id`, `quantity`, `address`)

These endpoints are a minimal starting point. The project aims to grow into a full eCommerce suite with user authentication, a visual admin dashboard, real-time analytics, and more advanced features listed in the project vision.

## Project Vision
See `VISION.md` for an overview of planned capabilities and architectural goals.
