import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getDatabase, type Database } from 'firebase/database'

type FirebasePublicConfig = {
  apiKey: string
  authDomain: string
  projectId: string
  databaseURL: string
}

/**
 * Читает публичную конфигурацию Firebase из env (доступна на клиенте и при сборке).
 */
function readPublicConfig(): FirebasePublicConfig {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? ''
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? ''
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? ''
  const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ?? ''

  if (!apiKey || !authDomain || !projectId || !databaseURL) {
    throw new Error(
      'Firebase: задайте NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID и NEXT_PUBLIC_FIREBASE_DATABASE_URL.',
    )
  }

  return { apiKey, authDomain, projectId, databaseURL }
}

let appInstance: FirebaseApp | undefined
let authInstance: Auth | undefined
let databaseInstance: Database | undefined

function getOrCreateApp(): FirebaseApp {
  if (appInstance) {
    return appInstance
  }

  const config = readPublicConfig()
  appInstance = getApps().length > 0 ? getApp() : initializeApp(config)
  return appInstance
}

/**
 * Ленивая инициализация Auth — не вызывать на верхнем уровне модулей (сборка Next без env).
 */
export function getFirebaseAuth(): Auth {
  if (!authInstance) {
    authInstance = getAuth(getOrCreateApp())
  }
  return authInstance
}

/**
 * Ленивая инициализация Realtime Database.
 */
export function getFirebaseDatabase(): Database {
  if (!databaseInstance) {
    databaseInstance = getDatabase(getOrCreateApp())
  }
  return databaseInstance
}
