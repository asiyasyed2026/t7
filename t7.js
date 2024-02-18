const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expenses');
const totalSpentElement = document.getElementById('total-spent');

let totalSpent = 0;

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value || '';

  // Basic input validation
  if (!date || !amount || isNaN(amount)) {
    alert('Please fill in all fields correctly.');
    return;
  }

  // Update total spent
  totalSpent += amount;

  // Create list item
  const listItem = document.createElement('li');
  listItem.textContent = `${date} - ${category}: $${amount.toFixed(2)} - ${description}`;

  // Display list item and update total
  expenseList.appendChild(listItem);
  totalSpentElement.textContent = totalSpent.toFixed(2);

  // Clear form fields
  expenseForm.reset();
});

