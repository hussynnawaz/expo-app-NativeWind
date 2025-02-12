declare module 'nativewind' {
    import * as React from 'react';
    import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
  
    type StyledComponent<T, P = {}> = React.ComponentType<P> & {
      className: string;
    };
  
    export function styled<T, P = {}>(
      component: React.ComponentType<T>,
    ): StyledComponent<T, P>;
  
    export function useStyle<T>(style: T, deps?: React.DependencyList): T;
  }