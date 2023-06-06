import { LOADING_COLOR } from '@/config/theme';
import { Edge, Connection } from '@reactflow/core';
import React from 'react';
import { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';

const initialNodes: any = [
    {
        id: 'horizontal-1',
        sourcePosition: 'right',
        type: 'input',
        data: { label: 'Cấu trúc thư mục' },
        position: { x: 0, y: 80 },
    },
    {
        id: 'horizontal-2',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'Public' },
        position: { x: 250, y: 0 },
    },
    {
        id: 'horizontal-3',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Src' },
        position: { x: 250, y: 160 },
    },
    {
        id: 'horizontal-5',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'api' },
        position: { x: 650, y: -200 },
    },
    {
        id: 'horizontal-6',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'assets' },
        position: { x: 650, y: -70 },
    },
    {
        id: 'horizontal-7',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'axiosClient.ts' },
        position: { x: 950, y: -260 },
    },
    {
        id: 'horizontal-7b',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'LocalStorage.ts' },
        position: { x: 950, y: -140 },
    },
    {
        id: 'horizontal-8',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'images' },
        position: { x: 950, y: -70 },
    },
    {
        id: 'horizontal-9',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'components' },
        position: { x: 650, y: 40 },
    },
    {
        id: 'horizontal-9a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'TableComponent.tsx' },
        position: { x: 950, y: -10 },
    },
    {
        id: 'horizontal-9b',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'SelectComponent.tsx' },
        position: { x: 950, y: 90 },
    },
    {
        id: 'horizontal-10',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'config' },
        position: { x: 650, y: 140 },
    },
    {
        id: 'horizontal-10a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'routes.tsx, global.style.ts, theme.ts, ...' },
        position: { x: 1100, y: 140 },
    },
    {
        id: 'horizontal-11',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'context | redux' },
        position: { x: 650, y: 230 },
    },
    {
        id: 'horizontal-11a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'store.ts, action, reducer' },
        position: { x: 1100, y: 220 },
    },
    {
        id: 'horizontal-12',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'features' },
        position: { x: 650, y: 330 },
    },
    {
        id: 'horizontal-12a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'page' },
        position: { x: 1100, y: 280 },
    },
    {
        id: 'horizontal-12b',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'components' },
        position: { x: 1100, y: 330 },
    },
    {
        id: 'horizontal-12c',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'service' },
        position: { x: 1100, y: 380 },
    },
    {
        id: 'horizontal-13',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'hooks' },
        position: { x: 650, y: 440 },
    },
    {
        id: 'horizontal-13a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'UseDebounce, useWindowResize, ...' },
        position: { x: 950, y: 430 },
    },
    {
        id: 'horizontal-14',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'layout' },
        position: { x: 650, y: 530 },
    },
    {
        id: 'horizontal-14a',
        targetPosition: 'left',
        type: 'output',
        data: { label: 'Sidebar' },
        position: { x: 950, y: 490 },
    },
    {
        id: 'horizontal-14b',
        type: 'output',
        data: { label: 'Content' },
        position: { x: 950, y: 570 },
    },
];

const initialEdges = [
    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        label: 'Thư mục khi build code',
        animated: true,
    },
    {
        id: 'horizontal-e1-3',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-3',
        label: 'Source chứa các thành phần khác',
        animated: true,
    },
    {
        id: 'horizontal-e3-5',
        source: 'horizontal-3',
        target: 'horizontal-5',
        label: 'Cấu hình api',
        animated: true,
    },
    {
        id: 'horizontal-e3-6',
        source: 'horizontal-3',
        target: 'horizontal-6',
        label: 'Chứa ảnh, fonts, json, file generator i18n',
        animated: true,
    },
    {
        id: 'horizontal-e5-7',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-7',
        label: 'Config axios',
        animated: true,
    },
    {
        id: 'horizontal-e5-7a',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-7b',
        label: 'Cấu hình localStorage',
        animated: true,
    },
    {
        id: 'horizontal-e6-8',
        source: 'horizontal-6',
        type: 'smoothstep',
        target: 'horizontal-8',
        label: 'Chứa ảnh',
        animated: true,
    },
    {
        id: 'horizontal-e3-9',
        source: 'horizontal-3',
        target: 'horizontal-9',
        label: 'Chứa những components chung dùng nhiều nơi',
        animated: true,
    },
    {
        id: 'horizontal-e3-9a',
        source: 'horizontal-9',
        target: 'horizontal-9a',
        label: 'Khởi tạo table component',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-9b',
        source: 'horizontal-9',
        target: 'horizontal-9b',
        label: 'Khởi tạo select component',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-10',
        source: 'horizontal-3',
        target: 'horizontal-10',
        label: 'Chứa những config cho cả web',
        animated: true,
    },
    {
        id: 'horizontal-e3-10a',
        source: 'horizontal-10',
        target: 'horizontal-10a',
        label: 'Chứa config như: router, globalStyle, theme, ...',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-11',
        source: 'horizontal-3',
        target: 'horizontal-11',
        label: 'Cấu hình Context hoặc redux',
        animated: true,
    },
    {
        id: 'horizontal-e3-11a',
        source: 'horizontal-11',
        target: 'horizontal-11a',
        label: 'Khởi tạo state global',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-12',
        source: 'horizontal-3',
        target: 'horizontal-12',
        label: 'Chứa các tính năng của ứng dụng',
        animated: true,
    },
    {
        id: 'horizontal-e3-12a',
        source: 'horizontal-12',
        target: 'horizontal-12a',
        label: 'Chưa các page của feature',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-12b',
        source: 'horizontal-12',
        target: 'horizontal-12b',
        label: 'Chứa các component dùng cho page',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-12c',
        source: 'horizontal-12',
        target: 'horizontal-12c',
        label: 'Chưa các logic + api',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-13',
        source: 'horizontal-3',
        target: 'horizontal-13',
        label: 'Custom hooks',
        animated: true,
    },
    {
        id: 'horizontal-e3-13a',
        source: 'horizontal-13',
        target: 'horizontal-13a',
        label: 'custom hook',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-14',
        source: 'horizontal-3',
        target: 'horizontal-14',
        label: 'Config HOC layout',
        animated: true,
    },
    {
        id: 'horizontal-e3-14a',
        source: 'horizontal-14',
        target: 'horizontal-14a',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: 'horizontal-e3-14b',
        source: 'horizontal-14',
        target: 'horizontal-14b',
        type: 'smoothstep',
        animated: true,
    },
];
const nodeColor = (node: any) => {
    switch (node.type) {
        case 'input':
            return LOADING_COLOR;
        case 'default':
            return '#00ff00';
        case 'output':
            return '#00ff00';
        default:
            return '#eee';
    }
};
const IntroductionPage = () => {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default IntroductionPage;
