import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import { AppRouter } from './router'
import { NotificationListener } from './utils/NotificationListener'


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<NotificationListener />
			<AppRouter />
		</QueryClientProvider>
	</StrictMode>,
);
