// emailTemplate.js
module.exports.OrderConfirmation = (
  firstName,
  orderItems,
  subtotal,
  deliveryFee,
  total
) => {
  let orderItemsHtml = "";
  orderItems.forEach((item) => {
    orderItemsHtml += `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
      `;
  });

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      .container {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        padding: 20px;
        max-width: 600px;
      }
      .header {
        background-color: #f8f8f8;
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #e7e7e7;
      }
      .content {
        margin: 20px 0;
      }
      .footer {
        background-color: #f8f8f8;
        padding: 20px;
        text-align: center;
        border-top: 1px solid #e7e7e7;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: white;
        background-color: #4CAF50;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: #f8f8f8;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://example.com/logo.png" alt="Company Logo">
      </div>
      <div class="content">
        <p>Hi ${firstName},</p>
        <p>Thank you for your order! We have received your order and it is now being processed. Here are the details of your order:</p>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsHtml}
          </tbody>
        </table>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> $${deliveryFee.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        <p>If you have any questions, feel free to reach out to our support team at <a href="mailto:support@example.com">support@example.com</a>.</p>
        <p>Thank you for shopping with us!</p>
        <p>The Company Team</p>
      </div>
      <div class="footer">
        <p>For more information, visit our <a href="https://example.com">website</a> or contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
        <a href="https://example.com/dashboard" class="button">Go to Dashboard</a>
      </div>
    </div>
  </body>
  </html>
    `;
};
