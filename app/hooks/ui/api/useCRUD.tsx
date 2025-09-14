import { useEffect, useState } from 'react';

// Define generic type T for data items
type CrudHook<T> = {
  data: T[];
  loading: boolean;
  createItem: (item: Partial<T>) => Promise<void>;
  updateItem: (id: string | number, item: Partial<T>) => Promise<void>;
  deleteItem: (id: string | number) => Promise<void>;
};

export function useCrud<T = any>(endpoint: string): CrudHook<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('Failed to fetch data');
    const json: T[] = await res.json();
    setData(json);
    setLoading(false);
  };

  const createItem = async (item: Partial<T>) => {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    fetchData();
  };

  const updateItem = async (id: string | number, item: Partial<T>) => {
    await fetch(`${endpoint}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    fetchData();
  };

  const deleteItem = async (id: string | number) => {
    await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, createItem, updateItem, deleteItem };
}
