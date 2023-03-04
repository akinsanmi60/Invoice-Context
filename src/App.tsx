import { useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContainer from "./Container/AppContainer";
import DashboardScreen from "./pages/dashBoardScreen";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleQuickAdd = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <div>
      <AppContainer>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
