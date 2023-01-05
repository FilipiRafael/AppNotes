import * as SQLite from 'expo-sqlite';

function AbreConexao() {
  const database = SQLite.openDatabase('db.db');
  return database;
}

export const db = AbreConexao();