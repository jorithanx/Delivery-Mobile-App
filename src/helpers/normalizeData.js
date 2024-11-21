export default function normalizeData(item) {
  const normalizedItem = item;
  const productName = item.type.product.name;

  if (productName === 'Pizzas' && !normalizedItem.normalized) {
    normalizedItem.type.name = `Pizza ${item.type.name}`;
    normalizedItem.size.description = `Tamanho: ${normalizedItem.size.description}`;
  }

  normalizedItem.normalized = true;

  return normalizedItem;
}

// hobby-session-73

// hobby-session-183

// hobby-session-205

// hobby-session-314

// hobby-session-373

// hobby-session-378
