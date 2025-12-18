// Quick script to create admin user
const fetch = require('node-fetch');

const createAdmin = async () => {
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin123',
        role: 'Owner'
      })
    });
    
    const data = await response.json();
    console.log('✅ Admin user created:', data);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    console.log('\n📝 Manual method:');
    console.log('Browser me F12 press karo, Console me ye code paste karo:');
    console.log(`
fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    username: 'admin',
    password: 'admin123',
    role: 'Owner'
  })
}).then(r => r.json()).then(console.log);
    `);
  }
};

createAdmin();

