import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.css';
import { Logo } from '../logo/Logo';

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-color border-bottom shadow-xs text-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
            <Logo />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="row mx-auto mt-1">
                <div className="container">
                <div className="col-12">
                    <input type="text" className="form-control shadow-sm rounded-1" placeholder="Buscar productos, marcas y más..." />
                </div>
                <div className="col-12">
                    <ul className="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Vehículos</a></li>
                                <li><a class="dropdown-item" href="#">Supermercado</a></li>
                                <li><a class="dropdown-item" href="#">Electrodomésticos</a></li>
                                <li><a class="dropdown-item" href="#">Hogar y Muebles</a></li>
                                <li><a class="dropdown-item" href="#">Deportes y Fitness</a></li>
                                <li><a class="dropdown-item" href="#">Belleza y Cuidado Personal</a></li>
                                <li><a class="dropdown-item" href="#">Accesorios para Vehiculos</a></li>
                                <li><a class="dropdown-item" href="#">Herramientas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/productos">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carrito">Historial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carrito">Supermercado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carrito">Moda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carrito">Vender</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carrito">Ayuda / PQR</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="navbar-cart-icon">
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <a className="nav-link mt-3" href="/">Crea tu cuenta</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mt-3" href="/productos">Ingresa</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mt-3" href="/carrito">Mis compras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/carrito">
                            <CartWidget itemCount={4} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
    
  )
}
