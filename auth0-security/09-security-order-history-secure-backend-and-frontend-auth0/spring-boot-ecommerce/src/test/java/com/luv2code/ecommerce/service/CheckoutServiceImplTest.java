package com.luv2code.ecommerce.service;

import static org.junit.jupiter.api.Assertions.*;

import com.luv2code.ecommerce.dao.CustomerRepository;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.PurchaseResponse;
import com.luv2code.ecommerce.entity.Customer;
import com.luv2code.ecommerce.entity.Order;
import com.luv2code.ecommerce.entity.OrderItem;
import com.luv2code.ecommerce.service.CheckoutServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class CheckoutServiceImplTest {

    @InjectMocks
    private CheckoutServiceImpl checkoutService;

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private Purchase purchase;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void placeOrderTest() {
        // Arrange
        Customer customer = new Customer();
        customer.setEmail("test@test.com");

        Order order = new Order();
        Set<OrderItem> orderItems = new HashSet<>();
        orderItems.add(new OrderItem());

        when(purchase.getCustomer()).thenReturn(customer);
        when(purchase.getOrder()).thenReturn(order);
        when(purchase.getOrderItems()).thenReturn(orderItems);
        when(customerRepository.findByEmail(any(String.class))).thenReturn(null);
        when(customerRepository.save(any(Customer.class))).thenReturn(customer);

        // Act
        PurchaseResponse response = checkoutService.placeOrder(purchase);

        // Assert
        assertEquals(order.getOrderTrackingNumber(), response.getOrderTrackingNumber());
    }
}