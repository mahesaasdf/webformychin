// Section transitions
function nextSection(option) {
  if (option === 'yes') {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'block';
  } else {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('no-message').classList.remove('hidden');
  }
}

function goBackToFirst() {
  document.getElementById('section1').style.display = 'block';
  document.getElementById('no-message').classList.add('hidden');
}

function backToSection1() {
  document.getElementById('section2').style.display = 'none';
  document.getElementById('section1').style.display = 'block';
}

function backToSection2() {
  document.getElementById('section3').style.display = 'none';
  document.getElementById('section2').style.display = 'block';
}

function backToSection3() {
  document.getElementById('section4').style.display = 'none';
  document.getElementById('section3').style.display = 'block';
}

// Find the Heart Game
function wrongClick() {
  alert('Salah nih! Cari lagi ya sayang!');
}

function correctClick() {
  alert('Yaay, ketemu love yang bener! Lanjut yuk!');
  document.getElementById('section2').style.display = 'none';
  document.getElementById('section3').style.display = 'block';
}

// Flip piece
function flipPiece(element) {
  element.classList.toggle('flipped');
  checkAllFlipped();
}

function checkAllFlipped() {
  const pieces = document.querySelectorAll('.flip-item');
  const allFlipped = Array.from(pieces).every((piece) => piece.classList.contains('flipped'));
  if (allFlipped) {
    document.getElementById('next-btn').classList.remove('hidden');
  }
}

function goToSection4() {
  document.getElementById('section3').style.display = 'none';
  document.getElementById('section4').style.display = 'block';
}

let isDragging = false;

// Function to start dragging
function startDrag(event) {
  isDragging = true;
  updateMeter(event);
}

// Function to stop dragging
function stopDrag() {
  isDragging = false;
}

// Function to handle dragging
function drag(event) {
  if (isDragging) {
    updateMeter(event);
  }
}

// Function to update meter width based on mouse position
function updateMeter(event) {
  let meter = document.getElementById('loveMeter');
  let meterFill = document.getElementById('meterFill');
  let loveDescription = document.getElementById('loveDescription');
  let rect = meter.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;
  let width = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
  meterFill.style.width = width + '%';

  // Update love description based on meter width
  if (width >= 70) {
    loveDescription.textContent = 'Cinta banget banget banget! 💖';
  } else if (width >= 50) {
    loveDescription.textContent = 'Cinta! 💖';
  } else {
    loveDescription.textContent = 'Ga terlalu cinta, tapi masih sayang! 💖';
  }

  // Check if meter is full
  if (width >= 100) {
    alert('Love Meter penuh, aku cinta banget sama kamu!');
  }
}

// Add event listeners for drag functionality
document.getElementById('loveMeter').addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);
