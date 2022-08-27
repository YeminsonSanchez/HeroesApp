import { HeroesRoutes } from '../heroes';
import { LoginPages } from '../auth';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path="login/*"
					element={
						<PublicRoute>
							{/* <LoginPages /> */}
							{/* otra forma de declarar rutas */}
							<Routes>
								<Route
									path="/*"
									element={<LoginPages />}
								/>
							</Routes>
						</PublicRoute>
					}
				/>

				<Route
					path="/*"
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};
