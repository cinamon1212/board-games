import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
})

const uid = process.argv[2]

if (!uid) {
  console.error('❌ UID is required')
  process.exit(1)
}

await admin.auth().setCustomUserClaims(uid, {
  admin: true,
})

console.log('✅ Admin set for:', uid)
process.exit(0)
