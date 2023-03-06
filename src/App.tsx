import { Navigate, Route, Routes } from "react-router-dom";
import AppContainer from "./Container/AppContainer";
import ClientListScreen from "./pages/clients";
import DashboardScreen from "./pages/dashBoardScreen";
import InvoiceListScreen from "./pages/invoices/InvoiceListScreen";
import ProductListScreen from "./pages/products/ProductListScreen";

function App() {
  return (
    <div>
      <AppContainer>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/clientslist" element={<ClientListScreen />} />
          <Route path="/invoicelist" element={<InvoiceListScreen />} />
          <Route path="/productlist" element={<ProductListScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
